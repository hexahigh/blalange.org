<script>
  import { onMount, onDestroy } from "svelte";
  import { config, defaultConfig } from "$lib/js/config";
  import PocketBase from "pocketbase";
  import { get } from "svelte/store";
  import { createAvatar } from "@dicebear/core";
  import { thumbs } from "@dicebear/collection";
  import { getSessionId } from "../js/session.js";
  import { Tooltip } from "flowbite-svelte";
  import "iconify-icon";

  import { verifyMessage, verifyName } from "$lib/js/chat";

  function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString(date.getTimezoneOffset() / 60, options);
  }

  export let id;

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

  let pb = new PocketBase(defaultConfig.dbEndpoint);

  config.subscribe((value) => {
    pb = new PocketBase(value.dbEndpoint);
  });

  // Fetch comments when the component mounts and whenever the `id` prop changes
  onMount(async () => {
    await fetchComments(currentPage);
  });

  // Reactive statement to fetch comments whenever the `id` prop changes
  $: if (id) {
    fetchComments(currentPage);
  }

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

  async function fetchComments(page, all) {
    if (typeof window === "undefined") return; // Exit if not in a browser environment
    if (!pb) return; // Ensure PocketBase is initialized

    try {
      let result;
      if (all === true) {
        result = await pb.collection("bla_comments").getFullList(200, {
          filter: `post_id = "${id}"`,
        });
      } else {
        result = await pb
          .collection("bla_comments")
          .getList(page, options.pageSize, {
            filter: `post_id = "${id}"`,
          });
      }

      let resultsToProcess;

      if (all === true) {
        resultsToProcess = result;
      } else {
        resultsToProcess = result.items;
      }

      // Go through each comment and if they are logged in, check if they are verified
      for (let i = 0; i < resultsToProcess.length; i++) {
        if (resultsToProcess[i].uid) {
          const record = await pb
            .collection("users")
            .getOne(resultsToProcess[i].uid);
          resultsToProcess[i].isAdmin = record.isAdmin;
          resultsToProcess[i].name = record.username;
          resultsToProcess[i].verified = true;
          resultsToProcess[i].extraBadges = record.extra.extraBadges;
        }
      }

      comments = [...comments, ...resultsToProcess];
      totalCommentsFetched += resultsToProcess.length;
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  async function addComment() {
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

      const record = await pb.collection("bla_comments").create({
        name: name,
        text: commentText,
        unix: unix,
        post_id: id,
        session_id: getSessionId(),
        uid: uid,
      });

      commentError = null;
      commentName = "";
      commentText = "";

      // Add the newly created comment to the comments array
      comments = [...comments, record];
    } catch (error) {
      console.error("Failed to add comment:", error);
      commentError = error.message;
    }
  }

  function loadMoreComments() {
    currentPage += 1;
    fetchComments(currentPage);
  }

  function loadAllComments() {
    comments = [];
    fetchComments(1, true);
  }
</script>

<div>
  <h3 class="text-xl font-bold mb-4">Kommentarer</h3>
  <div class="mb-4">
    <h4 class="text-md font-semibold">Skriv en kommentar</h4>
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
    <button class="blue-button" on:click={addComment}>Send</button>
    <p class:hidden={!commentError} class="text-red-500">{commentError}</p>
  </div>
  {#each comments as comment}
    <div class="mb-4 flex items-center">
      <img
        class="w-12 h-12 rounded-full mr-3"
        src={createAvatar(thumbs, { seed: comment.name }).toDataUriSync()}
        alt={comment.name}
      />
      <p class="text-gray-500 dark:text-gray-300 mr-4 font-bold">
        {comment.name}
        {#if comment.verified}
          <!-- <span class="text-green-500 symbols">&#xf42e</span> -->
          <iconify-icon class="text-green-500" icon="lucide:check" />
          <Tooltip class="text-black dark:text-white bg-gray-300"
            >The user was logged in</Tooltip
          >
        {/if}
        {#if comment.isAdmin}
          <!-- <span class="text-blue-500 symbols">&#xf510</span> -->
          <iconify-icon class="text-blue-500" icon="lucide:shield-check" />
          <Tooltip class="text-black dark:text-white bg-gray-300"
            >The user is an admin</Tooltip
          >
        {/if}
        {#if comment.extraBadges}
          {#each comment.extraBadges as badge}
            {#if badge.v2}
              <iconify-icon
                style={"color: " + badge.color}
                icon={badge.badge}
              />
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
      <p class="text-gray-500 dark:text-gray-300">{formatDate(comment.unix)}</p>
    </div>
    <div>
      <p class="text-gray-800 dark:text-gray-300 mb-8">{comment.text}</p>
    </div>
  {/each}
  {#if totalCommentsFetched > 0}
    <button on:click={loadMoreComments} class="blue-button">Vis flere</button>
    <button on:click={loadAllComments} class="blue-button">Vis alle</button>
  {/if}
</div>

<style>
  iconify-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
  }
</style>
