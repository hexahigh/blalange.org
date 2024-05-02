<script>
  import { onMount, onDestroy } from "svelte";
  import { config } from "$lib/js/config.js";
  import PocketBase from "pocketbase";
  import { get } from "svelte/store";
  import { createAvatar } from "@dicebear/core";
  import { thumbs } from "@dicebear/collection";
  import { getSessionId } from "../js/session.js";
  import { Tooltip } from 'flowbite-svelte';

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

  let pb = new PocketBase(get(config).dbEndpoint);

  // Fetch comments when the component mounts and whenever the `id` prop changes
  onMount(async () => {
    await fetchComments();
  });

  // Reactive statement to fetch comments whenever the `id` prop changes
  $: if (id) {
    fetchComments();
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

  async function fetchComments() {
    if (typeof window === "undefined") return; // Exit if not in a browser environment
    if (!pb) return; // Ensure PocketBase is initialized

    try {
      const result = await pb.collection("bla_comments").getList(1, 100, {
        filter: `post_id = "${id}"`,
      });
      comments = result.items;
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  async function addComment() {
    if (!pb) return; // Ensure PocketBase is initialized

    try {
      let unix = Math.floor(Date.now() / 1000);

      // Make name lowercase, except the first letter
      let name = commentName.toLowerCase();
      name = name.charAt(0).toUpperCase() + name.slice(1);

      if (isLoggedIn()) {
        name = getUserName();
      }

      const record = await pb.collection("bla_comments").create({
        name: name,
        text: commentText,
        unix: unix,
        post_id: id,
        session_id: getSessionId(),
        logged_in: isLoggedIn(),
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
</script>

<div>
  <h3 class="text-xl font-bold mb-4">Kommentarer</h3>
  <div class="mb-4">
    <h4 class="text-md font-semibold">Skriv en kommentar</h4>
    <p class:hidden={!isLoggedIn()} class="text-green-500">Du er logget inn som: {getUserName()}</p>
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
    <button
      class="blue-button"
      on:click={addComment}>Send</button
    >
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
        {#if comment.logged_in}
          <span class="text-green-500 symbols">✓</span>
        {/if}
      </p>
      <Tooltip>{comment.session_id}</Tooltip>
      <p class="text-gray-500 dark:text-gray-300">{formatDate(comment.unix)}</p>
    </div>
    <div>
      <p class="text-gray-800 dark:text-gray-300 mb-8">{comment.text}</p>
    </div>
  {/each}
</div>
