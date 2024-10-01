<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import { config, defaultConfig } from "$lib/js/config";
  import { createAvatar, type Result as DicebearResult } from "@dicebear/core";
  import { getSessionId } from "$lib/js/session.js";
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

  const client = getDirectusInstance(null)
  const wsClient = createDirectus(defaultConfig.directeusWebsocketEndpoint + "/websocket").with(realtime());
  const pb = new PocketBase(defaultConfig.dbEndpoint);

  config.subscribe((value) => {
    devMode = value.devMode;
  });

  let userCache = [];
  let avatarCache = [];

  // Fetch comments when the component mounts and whenever the `id` prop changes
  onMount(async () => {
    await initialFetch();
    await subscribe();
    scrollToBottom(false, true); // Force scroll to bottom
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
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  async function subscribe() {
    const { subscription } = await wsClient.subscribe("chat", {
      event: "create",
      query: {
        fields: ["*", "user.*"],
      },
    });

    for await (const item of subscription) {
      let processed = await processMessage([item]);
      comments = [...comments, ...processed];
      sortComments();
      scrollToBottom();
    }
  }

  async function sortComments() {
    // Sort comments by timestamp
    comments = comments.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
  }

  async function processMessage(messages) {
    let startTime = performance.now();

    let stageTimes = {
      processMessageText: 0,
      genAvatar: 0,
      loggedInStuff: {
        userFetch: 0,
        total: 0,
      },
    };

    let chatTextCacheLS = localStorage.getItem("chatTextCache");
    let chatTextCache = JSON.parse(chatTextCacheLS || "{}");

    // Go through each comment and if they are logged in, check if they are verified
    for (let i = 0; i < messages.length; i++) {
      try {
          let startTime = performance.now();
          let record = messages[i].user;
          messages[i].isAdmin = record.role == "1fa38b0f-2689-4aa3-9123-636762b129c4"
          messages[i].name = record.first_name + " " + record.last_name;
          messages[i].verified = true;
          if (record.extra) {
            messages[i].extraBadges = record.extra.extraBadges;
          } else {
            messages[i].extraBadges = [];
          }

          // Get avatar
          messages[i].avatar = getImageUrl(record.avatar, {width: 256});

          // If the avatar is empty, fall back to the generated avatar
          if (!messages[i].avatar || messages[i].avatar === "") {
            let startTime = performance.now();
            messages[i].avatar = genAvatar(options.avatarPack, messages[i].name).toDataUriSync();
            stageTimes.genAvatar += performance.now() - startTime;
          }

          // Store in cache
          userCache[messages[i].uid] = record;

          stageTimes.loggedInStuff.total += performance.now() - startTime;

        startTime = performance.now();
        if (chatTextCache && chatTextCache[messages[i].id]) {
          messages[i].text = chatTextCache[messages[i].id];
        } else {
          messages[i].text = await processMessageText(messages[i].text);

          // Store in cache
          if (!chatTextCache) {
            chatTextCache = {};
          }
          chatTextCache[messages[i].id] = messages[i].text;
          try {
            localStorage.setItem("chatTextCache", JSON.stringify(chatTextCache));
          } catch (error) {}
        }
        stageTimes.processMessageText += performance.now() - startTime;
      } catch (error) {
        if (devMode) {
          console.error("An error occurred while processing message with id " + messages[i].id + ":", error);
          // Remove the message from the list
          messages.splice(i, 1);
          i--;
        }
      }
    }

    if (devMode) {
      console.log(`[Chat] Processed ${messages.length} messages in ${performance.now() - startTime}ms`);
      console.log(`[Chat] Detailed performance report: ${JSON.stringify(stageTimes, null, 2)}`);
    }

    return messages;
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
          })
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
      await scrollToBottom(true);
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
            {formatDate(comment.date_created)}
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
  <div class="mb-4 rounded-md border-t-blue-500 border-x-blue-500 p-4 border-b-0 border-2">
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
</style>
