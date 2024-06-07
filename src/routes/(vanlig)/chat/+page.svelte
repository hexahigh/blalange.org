<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import { config } from "$lib/js/config.js";
  import PocketBase from "pocketbase";
  import { get } from "svelte/store";
  import { createAvatar, type Result as DicebearResult } from "@dicebear/core";
  import { thumbs } from "@dicebear/collection";
  import { getSessionId } from "$lib/js/session.js";
  import { Tooltip } from "flowbite-svelte";
  import Metatags from "$lib/components/metatags.svelte";
  import Icon from "@iconify/svelte";

  import { toRedirect } from "$lib/js/redirect";
  import { verifyMessage, verifyName, processMessageText } from "$lib/js/chat";

  function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
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
  };

  let pb = new PocketBase(get(config).dbEndpoint);

  let userCache = [];
  let avatarCache = [];

  // Fetch comments when the component mounts and whenever the `id` prop changes
  onMount(async () => {
    await initialFetch();
    await subscribe();
    scrollToBottom();
  });

  function isLoggedIn() {
    if (!pb) return; // Ensure PocketBase is initialized
    return pb.authStore.isValid;
  }

  function getUserName() {
    if (!pb) return; // Ensure PocketBase is initialized

    if (!pb.authStore.isValid) {
      return "Anon";
    }
    return pb.authStore.model.username;
  }

  async function initialFetch() {
    if (typeof window === "undefined") return; // Exit if not in a browser environment
    if (!pb) return; // Ensure PocketBase is initialized

    try {
      let result = await pb.collection("bla_chat").getFullList(200, {});

      let processed = await processMessage(result);

      comments = [...comments, ...processed];
      sortComments();
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  async function subscribe() {
    pb.collection("bla_chat").subscribe(
      "*",
      async function (e) {
        let processed = await processMessage([e.record]);
        comments = [...comments, ...processed];
        sortComments();
        scrollToBottom();
      },
      {
        /* other options like expand, custom headers, etc. */
      }
    );
  }

  async function sortComments() {
    return;
    // Sort comments by timestamp
    comments = comments.sort((a, b) => b.unix - a.unix);
  }

  async function processMessage(messages) {
    // Go through each comment and if they are logged in, check if they are verified
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].uid) {
        let record: any;
        // Check if it is in the cache
        if (userCache[messages[i].uid]) {
          record = userCache[messages[i].uid];
        } else {
          record = await pb.collection("users").getOne(messages[i].uid);
        }
        messages[i].isAdmin = record.isAdmin;
        messages[i].name = record.username;
        messages[i].verified = true;
        messages[i].extraBadges = record.extra.extraBadges;

        userCache[messages[i].uid] = record;
      }
    }

    return messages;
  }

  async function addMessage() {
    if (!pb) return; // Ensure PocketBase is initialized

    try {
      let verifyResult;

      verifyResult = await verifyMessage(commentText);

      if (!verifyResult.valid) {
        commentError = verifyResult.error;
        return;
      }

      if (!isLoggedIn()) {
        verifyResult = await verifyName(commentName);
      }

      if (!verifyResult.valid) {
        commentError = verifyResult.error;
        return;
      }

      let unix = Math.floor(Date.now() / 1000);

      // Make name lowercase, except the first letter
      let name = commentName.toLowerCase();
      name = name.charAt(0).toUpperCase() + name.slice(1);

      let uid;

      if (isLoggedIn()) {
        name = getUserName();
        uid = pb.authStore.model.id;
      }

      const record = await pb.collection("bla_chat").create({
        name: name,
        text: commentText,
        unix: unix,
        session_id: getSessionId(),
        uid: uid,
      });

      commentError = null;
      commentText = "";
    } catch (error) {
      console.error("Failed to add comment:", error);
      commentError = error.message;
    }
  }

  //TODO: This function seems overly complex and looks messy. It should be refactored.
  async function scrollToBottom(itself: boolean = false) {
    if (typeof window === "undefined") return; // Exit if not in a browser environment
    const chatContainer = document.getElementById("chat-messages-container");

    const treshold = 500;

    const scrollTopMax =
      chatContainer.scrollHeight - chatContainer.clientHeight;

    if (chatContainer) {
      // If the difference between the scroll position and the max scroll position is less than the treshold, scroll to the bottom
      if (scrollTopMax - chatContainer.scrollTop < treshold) {
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

<Metatags
  title="Episk chat"
  description="Episk chat for kule Blålanger"
  url="/chat"
/>

<div
  class="mx-auto max-w-6xl m-4 p-4 rounded-lg dark:bg-gray-800 dark:text-white"
>
  <div class="text-center">
    <h1 class="text-3xl font-bold mb-4 rimword">Episk chat</h1>
  </div>
  <div id="chat-messages-container" class="chat-messages-container">
    {#each comments as comment}
      <div class="mb-4 flex items-center">
        <img
          class="w-12 h-12 rounded-full mr-3"
          src={genAvatar(thumbs, comment.name).toDataUriSync()}
          alt={comment.name}
        />
        <p class="text-gray-500 dark:text-gray-300 mr-4 font-bold">
          {comment.name}
          {#if comment.verified}
            <!-- <span class="text-green-500 symbols">&#xf42e</span> -->
            <Icon class="inline text-green-500" icon="lucide:check" />
            <Tooltip class="text-black dark:text-white bg-gray-300"
              >The user was logged in</Tooltip
            >
          {/if}
          {#if comment.isAdmin}
            <!-- <span class="text-blue-500 symbols">&#xf510</span> -->
            <Icon class="inline text-blue-500" icon="lucide:shield-check" />
            <Tooltip class="text-black dark:text-white bg-gray-300"
              >The user is an admin</Tooltip
            >
          {/if}
          {#if comment.extraBadges}
            {#each comment.extraBadges as badge}
              {#if badge.v2}
                <Icon style={"color: " + badge.color} class="inline" icon={badge.badge} />
                <Tooltip class="text-black dark:text-white bg-gray-300"
                  >{badge.hover_text}</Tooltip
                >
              {:else}
                <span style={"color: " + badge.color} class="symbols"
                  >{badge.badge}</span
                >
                <Tooltip class="text-black dark:text-white bg-gray-300"
                  >{badge.hover_text}</Tooltip
                >
              {/if}
            {/each}
          {/if}
        </p>
        <p class="text-gray-500 dark:text-gray-300">
          {formatDate(comment.unix)}
        </p>
      </div>
      <div>
        <p class="text-gray-800 dark:text-gray-300 mb-8">
          {@html processMessageText(comment.text)}
        </p>
      </div>
    {/each}
  </div>
  <div
    class="mb-4 rounded-md border-t-blue-500 border-x-blue-500 p-4 border-b-0 border-2"
  >
    <h4 class="text-md font-semibold">Send en melding</h4>
    <p class:hidden={!isLoggedIn()} class="text-green-500">
      Du er logget inn som: {getUserName()}
    </p>
    <p>Navn</p>
    <input
      class="w-1/2 p-2 border-black border-2 rounded dark:bg-gray-900 dark:border-gray-700"
      bind:value={commentName}
      disabled={isLoggedIn()}
    />
    <p>Tekst</p>
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
</style>
