<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import { config, defaultConfig } from "$lib/js/config";
  import { createAvatar, type Result as DicebearResult } from "@dicebear/core";
  import { Tooltip } from "flowbite-svelte";
  import Metatags from "$lib/components/metatags.svelte";
  import "iconify-icon";

  import { verifyMessage, verifyName, processMessageText } from "$lib/js/chat";

  import { getDirectusInstance, isLoggedIn, storage, getImageUrl, currentUser } from "$lib/js/directus";
  import { readItems, readItem, createItem, authentication, realtime, createDirectus } from "@directus/sdk";

  import PocketBase from "pocketbase";

  function formatDate(time) {
    const date = new Date(time);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  }

  let commentError = null;

  let commentName = "";
  let commentText = "";

  let comments = [];
  let currentPage = 1;
  let totalCommentsFetched = 0;

  // Options
  let options = {
    pageSize: 25,
    avatarPack: defaultConfig.dicebearCollection,
  };

  let devMode: boolean;

  const client = getDirectusInstance(null);
  const wsClient = createDirectus(defaultConfig.directeusWebsocketEndpoint + "/websocket").with(realtime());
  const pb = new PocketBase(defaultConfig.dbEndpoint);

  config.subscribe((value) => {
    devMode = value.devMode;
  });

  let avatarCache = [];
  let userExtraCache = [];

  // Fetch comments when the component mounts and whenever the `id` prop changes
  onMount(async () => {
    await initialFetch();
    await subscribe();
    await scrollToBottom(false, true); // Force scroll to bottom
  });

  async function initialFetch() {
    if (typeof window === "undefined") return; // Exit if not in a browser environment

    try {
      let page = 1;

      for (let i = 1; i <= page; i++) {
        let result = await client.request(
          readItems("chat", {
            limit: options.pageSize,
            page: i,
            sort: "date_created",
            fields: ["*", "user.*"],
          }),
        );
        // If the result is an empty array then we have most likely reached the end of the list
        if (result.length === 0) {
          break;
        }
        let processed = await processMessage(result);

        comments = [...comments, ...processed];
      }
      sortComments();
      await scrollToBottom(false, true);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  async function subscribe() {
    const { subscription } = await wsClient.subscribe("chat", {
      event: "create",
      query: {
        sort: "date_created",
        fields: ["*", "user.*"],
      },
      realtime: true,
    });

    for await (const item of subscription) {
      if (item.event !== "create") continue;
      let processed = await processMessage((item as any).data);
      comments = [...comments, ...processed];
      sortComments();
      scrollToBottom();
    }
  }

  async function sortComments() {
    return;
    // Sort comments by timestamp
    comments = comments.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
  }

  async function processMessage(messages) {
    let processedMessages = [];

    let startTime = performance.now();

    let stageTimes = {
      processMessageText: 0,
      genAvatar: 0,
      loggedInStuff: {
        userFetch: 0,
        total: 0,
      },
    };

    // If messages is not an array, make it one
    if (!Array.isArray(messages)) {
      messages = [messages];
    }

    // Go through each comment and if they are logged in, check if they are verified
    for (let i = 0; i < messages.length; i++) {
      try {
        processedMessages[i] = {};
        let startTime = performance.now();
        processedMessages[i].isAdmin = messages[i].user.role == "1fa38b0f-2689-4aa3-9123-636762b129c4";
        processedMessages[i].name = messages[i].user.first_name + " " + messages[i].user.last_name;
        processedMessages[i].verified = true;
        processedMessages[i].date = messages[i].date_created;

        let extraInfo;

        if (userExtraCache[messages[i].user.id]) {
          extraInfo = userExtraCache[messages[i].user.id];
        } else {
          // Get extra info
          extraInfo = await client
            .request(
              readItems("users_extra", {
                filter: {
                  user: messages[i].user.id,
                },
                limit: 1,
              }),
            )
            .then((result) => {
              return result[0];
            });

          userExtraCache[messages[i].user.id] = extraInfo || {};
        }

        if (extraInfo) {
          processedMessages[i].extraBadges = extraInfo.badges || [];
        }

        // Get avatar
        processedMessages[i].avatar = getImageUrl(messages[i].user.avatar, { width: 256 });

        // If the avatar is empty, fall back to the generated avatar
        if (!processedMessages[i].avatar || !messages[i].user.avatar) {
          let startTime = performance.now();
          processedMessages[i].avatar = genAvatar(options.avatarPack, messages[i].name).toDataUriSync();
          stageTimes.genAvatar += performance.now() - startTime;
        }

        stageTimes.loggedInStuff.total += performance.now() - startTime;

        startTime = performance.now();

        processedMessages[i].text = await processMessageText(messages[i].text);

        stageTimes.processMessageText += performance.now() - startTime;
      } catch (error) {
        if (devMode) {
          console.error("An error occurred while processing message with id " + messages[i].id + ":", error);
        }
        // Remove the message from the list
        messages.splice(i, 1);
        processedMessages.splice(i, 1);
        i--;
      }
    }

    if (devMode) {
      console.log(`[Chat] Processed ${messages.length} messages in ${performance.now() - startTime}ms`);
      console.log(`[Chat] Detailed performance report: ${JSON.stringify(stageTimes, null, 2)}`);
    }

    return processedMessages;
  }

  async function addMessage() {
    try {
      if (!isLoggedIn()) return;

      if (!commentText) {
        commentError = "Du må skrive en melding";
        return;
      }

      client.request(
        createItem("chat", {
          text: commentText,
          user: await currentUser().then((user) => {
            return user.id;
          }),
        }),
      );

      commentError = null;
      commentText = "";
    } catch (error) {
      console.error("Failed to add comment:", error);
      commentError = error.message;
    }
  }

  //TODO: This function seems overly complex and looks messy. It should be refactored.
  async function scrollToBottom(itself: boolean = false, force: boolean = false) {
    if (typeof window === "undefined") return; // Exit if not in a browser environment
    const chatContainer = document.getElementById("chat-messages-container");

    const treshold = 500;

    const scrollTopMax = chatContainer.scrollHeight - chatContainer.clientHeight;

    if (chatContainer) {
      // If the difference between the scroll position and the max scroll position is less than the treshold, scroll to the bottom
      if (scrollTopMax - chatContainer.scrollTop < treshold || force) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }

    // exit if called from itself
    if (itself) {
      return;
    } else {
      await tick();
      await scrollToBottom(true, force);
    }
  }

  function genAvatar(type: any, seed: string): DicebearResult {
    if (avatarCache[seed]) {
      return avatarCache[seed];
    } else {
      return (avatarCache[seed] = createAvatar(type, { seed: seed }));
    }
  }
</script>

<Metatags title="Chat" description="Episk chat for kule Blålanger" url="/chat" />

<div class="mx-auto max-w-6xl m-4 p-4 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white">
  <div class="text-center">
    <h1 class="text-3xl font-bold mb-4 rimword">Chat</h1>
  </div>
  <div id="chat-messages-container" class="chat-messages-container">
    {#each comments as comment}
      {#if comment.text}
        <div class="mb-4 flex items-center">
          <img class="w-12 h-12 rounded-full mr-3" src={comment.avatar} alt={comment.name} />
          <p class="text-gray-500 dark:text-gray-300 mr-4 font-bold">
            {comment.name}
            {#if comment.verified}
              <!-- <span class="text-green-500 symbols">&#xf42e</span> -->
              <iconify-icon class="text-green-500" icon="lucide:check" />
              <Tooltip class="text-black dark:text-white bg-gray-300">The user was logged in</Tooltip>
            {/if}
            {#if comment.isAdmin}
              <!-- <span class="text-blue-500 symbols">&#xf510</span> -->
              <iconify-icon class="text-blue-500" icon="lucide:shield-check" />
              <Tooltip class="text-black dark:text-white bg-gray-300">The user is an admin</Tooltip>
            {/if}
            {#if comment.extraBadges}
              {#each comment.extraBadges as badge}
                {#if badge.v2}
                  <iconify-icon style={"color: " + badge.color} icon={badge.badge} />
                  <Tooltip class="text-black dark:text-white bg-gray-300">{badge.hover_text}</Tooltip>
                {:else}
                  <span style={"color: " + badge.color} class="symbols">{badge.badge}</span>
                  <Tooltip class="text-black dark:text-white bg-gray-300">{badge.hover_text}</Tooltip>
                {/if}
              {/each}
            {/if}
          </p>
          <p class="text-gray-500 dark:text-gray-300">
            {formatDate(comment.date)}
          </p>
        </div>
        <div>
          <p class="text-gray-800 dark:text-gray-300 mb-8 comment-text">
            {@html comment.text}
          </p>
        </div>
      {/if}
    {/each}
  </div>
  <div class="mb-4 rounded-md border-t-blue-500 border-x-blue-500 p-4 border-b-0 border-2 relative">
    {#if isLoggedIn()}
      <h4 class="text-md font-semibold">Send en melding</h4>
      <p class="mt-1 text-xs">
        <span class="text-red-500">*</span> Du kan bruke markdown
      </p>
      <p>Melding</p>
      <textarea
        class="w-full p-2 border-black border-2 rounded dark:bg-gray-900 dark:border-gray-700"
        bind:value={commentText}
      ></textarea>
      <button class="blue-button" on:click={addMessage}>Send</button>
      <p class:hidden={!commentError} class="text-red-500">{commentError}</p>
    {:else}
      <div class="blur-overlay">
        <div class="blur-overlay-text">Du må være innlogget for å sende meldinger</div>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .chat-messages-container {
    max-height: 60vh; /* Adjust this value as needed */
    height: 60vh;
    overflow-y: auto;
    padding: 1rem; /* Optional: Add some padding inside the container */
  }

  iconify-icon {
    display: inline-block;
    font-size: large;
    width: 1em;
    height: 1em;
  }

  .comment-text :global(.blocked-word) {
    background-color: black;
    color: black;
    @apply hover:no-underline hover:text-inherit hover:bg-inherit;
  }

  .comment-text :global(.link) {
    @apply text-blue-500 hover:underline;
  }

  .comment-text :global(a) {
    @apply text-blue-500 hover:underline;
  }

  .blur-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /*background-color: rgba(17, 24, 39, 0.7);*/
    @apply dark:bg-[rgba(17,24,39,0.7)];
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .blur-overlay-text {
    font-size: 18px;
    font-weight: bold;
    @apply text-black dark:text-gray-300;
  }
</style>
