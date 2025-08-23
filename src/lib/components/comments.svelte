<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import { config, defaultConfig } from "$lib/js/config";
  import { createAvatar, type Result as DicebearResult } from "@dicebear/core";
  import { thumbs } from "@dicebear/collection";
  import { Tooltip } from "flowbite-svelte";
  import "iconify-icon";

  import { verifyMessage, verifyName, processMessageText } from "$lib/js/chat";

  import { getDirectusInstance, isLoggedIn, storage, getImageUrl, currentUser } from "$lib/js/directus";
  import { readItems, readItem, createItem, authentication, realtime, createDirectus } from "@directus/sdk";

  interface Props {
    id: string; // article art_id
  }

  let { id }: Props = $props();

  function formatDate(time) {
    const date = new Date(time);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("no-nb", options);
  }

  let commentError = $state(null);
  let commentText = $state("");
  let replyingTo = $state(null);
  let replyText = $state("");

  let comments = $state([]);
  let replies = $state({});

  // Options
  let options = {
    pageSize: 50,
    avatarPack: thumbs,
  };

  let devMode: boolean;

  const client = getDirectusInstance(null);
  const wsClient = createDirectus(defaultConfig.directeusWebsocketEndpoint + "/websocket").with(realtime());

  config.subscribe((value) => {
    devMode = value.devMode;
  });

  let avatarCache = [];
  let userExtraCache = [];

  // Fetch comments when the component mounts
  onMount(async () => {
    await initialFetch();
    await subscribe();
  });

  async function initialFetch() {
    if (typeof window === "undefined") return;

    try {
      // Fetch top-level comments
      let result = await client.request(
        readItems("art_comments", {
          filter: {
            article_id: { _eq: id },
            parent: { _null: true },
            status: { _eq: "published" },
          },
          limit: options.pageSize,
          sort: ["date_created"],
          fields: ["*", "user.*"],
        }),
      );

      let processed = await processComments(result);
      comments = processed;

      // Fetch replies for each comment
      for (let comment of comments) {
        await fetchReplies(comment.id);
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  }

  async function fetchReplies(commentId) {
    try {
      let result = await client.request(
        readItems("art_comments", {
          filter: {
            parent: { _eq: commentId },
            status: { _eq: "published" },
          },
          sort: ["date_created"],
          fields: ["*", "user.*"],
        }),
      );

      let processed = await processComments(result);
      replies[commentId] = processed;
    } catch (error) {
      console.error("Failed to fetch replies:", error);
    }
  }

  async function subscribe() {
    try {
      const { subscription } = await wsClient.subscribe("art_comments", {
        event: "create",
        query: {
          filter: {
            article_id: { _eq: id },
            status: { _eq: "published" },
          },
          sort: ["date_created"],
          fields: ["*", "user.*"],
        },
        realtime: true,
      });

      for await (const item of subscription) {
        if (item.event !== "create") continue;
        let processed = await processComments((item as any).data);
        let newComment = processed[0];

        if (!newComment.parent) {
          // Top-level comment
          comments = [...comments, newComment];
        } else {
          // Reply to existing comment
          let parentId = newComment.parent;
          if (!replies[parentId]) {
            replies[parentId] = [];
          }
          replies[parentId] = [...replies[parentId], newComment];
        }
      }
    } catch (error) {
      console.error("Failed to subscribe to comments:", error);
    }
  }

  async function processComments(commentsList) {
    let processedComments = [];

    if (!Array.isArray(commentsList)) {
      commentsList = [commentsList];
    }

    for (let i = 0; i < commentsList.length; i++) {
      try {
        processedComments[i] = {};
        processedComments[i].id = commentsList[i].id;
        processedComments[i].parent = commentsList[i].parent;
        processedComments[i].isAdmin = commentsList[i].user.role == "1fa38b0f-2689-4aa3-9123-636762b129c4";
        processedComments[i].name = commentsList[i].user.first_name + " " + commentsList[i].user.last_name;
        processedComments[i].verified = true;
        processedComments[i].date = commentsList[i].date_created;

        let extraInfo;
        if (userExtraCache[commentsList[i].user.id]) {
          extraInfo = userExtraCache[commentsList[i].user.id];
        } else {
          extraInfo = await client
            .request(
              readItems("users_extra", {
                filter: {
                  user: commentsList[i].user.id,
                },
                limit: 1,
              }),
            )
            .then((result) => {
              return result[0];
            });

          userExtraCache[commentsList[i].user.id] = extraInfo || {};
        }

        if (extraInfo) {
          processedComments[i].extraBadges = extraInfo.badges || [];
        }

        // Get avatar
        processedComments[i].avatar = getImageUrl(commentsList[i].user.avatar, { width: 256 });

        // If the avatar is empty, fall back to the generated avatar
        if (!processedComments[i].avatar || !commentsList[i].user.avatar) {
          processedComments[i].avatar = genAvatar(options.avatarPack, processedComments[i].name).toDataUri();
        }

        processedComments[i].text = await processMessageText(commentsList[i].text);
      } catch (error) {
        if (devMode) {
          console.error("An error occurred while processing comment with id " + commentsList[i].id + ":", error);
        }
        commentsList.splice(i, 1);
        processedComments.splice(i, 1);
        i--;
      }
    }

    return processedComments;
  }

  async function addComment() {
    try {
      if (!isLoggedIn()) return;

      if (!commentText.trim()) {
        commentError = "Du må skrive en kommentar";
        return;
      }

      await client.request(
        createItem("art_comments", {
          article_id: id,
          text: commentText,
          user: await currentUser().then((user) => user.id),
          status: "published",
        }),
      );

      commentError = null;
      commentText = "";
    } catch (error) {
      console.error("Failed to add comment:", error);
      commentError = error.message;
    }
  }

  async function addReply(parentId) {
    try {
      if (!isLoggedIn()) return;

      if (!replyText.trim()) {
        return;
      }

      await client.request(
        createItem("art_comments", {
          article_id: id,
          text: replyText,
          parent: parentId,
          user: await currentUser().then((user) => user.id),
          status: "published",
        }),
      );

      replyText = "";
      replyingTo = null;
    } catch (error) {
      console.error("Failed to add reply:", error);
    }
  }

  function startReply(commentId) {
    replyingTo = commentId;
    replyText = "";
  }

  function cancelReply() {
    replyingTo = null;
    replyText = "";
  }

  function genAvatar(type: any, seed: string): DicebearResult {
    if (avatarCache[seed]) {
      return avatarCache[seed];
    } else {
      return (avatarCache[seed] = createAvatar(type, { seed: seed }));
    }
  }
</script>

<div class="bg-base-200 rounded-lg p-6 mt-8">
  <h3 class="text-xl font-bold mb-6">Kommentarer</h3>

  <!-- Comments List -->
  <div class="space-y-6">
    {#each comments as comment}
      <div class="card bg-base-100 shadow-sm">
        <div class="card-body p-4">
          <!-- Comment Header -->
          <div class="flex items-center space-x-3 mb-3">
            <div class="avatar">
              <div class="w-10 h-10 rounded-full">
                <img src={comment.avatar} alt={comment.name} />
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center space-x-2">
                <span class="font-semibold text-sm">{comment.name}</span>
                {#if comment.verified}
                  <iconify-icon class="text-success" icon="lucide:check"></iconify-icon>
                  <Tooltip class="text-primary-content bg-primary">Brukeren var innlogget</Tooltip>
                {/if}
                {#if comment.isAdmin}
                  <iconify-icon class="text-primary" icon="lucide:shield-check"></iconify-icon>
                  <Tooltip class="text-primary-content bg-primary">Brukeren er en administrator</Tooltip>
                {/if}
                {#if comment.extraBadges}
                  {#each comment.extraBadges as badge}
                    {#if badge.v2}
                      <iconify-icon style={"color: " + badge.color} icon={badge.badge}></iconify-icon>
                      <Tooltip class="text-primary-content bg-primary">{badge.hover_text}</Tooltip>
                    {:else}
                      <span style={"color: " + badge.color} class="symbols">{badge.badge}</span>
                      <Tooltip class="text-primary-content bg-primary">{badge.hover_text}</Tooltip>
                    {/if}
                  {/each}
                {/if}
              </div>
              <div class="text-xs opacity-70">
                {formatDate(comment.date)}
              </div>
            </div>
          </div>

          <!-- Comment Text -->
          <div class="prose prose-sm max-w-none text-base-content">
            {@html comment.text}
          </div>

          <!-- Reply Button -->
          {#if isLoggedIn()}
            <div class="card-actions justify-end mt-3">
              <button class="btn btn-ghost btn-sm" onclick={() => startReply(comment.id)}>
                <iconify-icon icon="lucide:reply"></iconify-icon>
                Svar
              </button>
            </div>
          {/if}

          <!-- Reply Form -->
          {#if replyingTo === comment.id}
            <div class="mt-4 p-4 bg-base-200 rounded-lg">
              <textarea
                class="textarea textarea-bordered w-full resize-none"
                placeholder="Skriv et svar..."
                rows="3"
                bind:value={replyText}
              ></textarea>
              <div class="flex justify-end space-x-2 mt-2">
                <button class="btn btn-ghost btn-sm" onclick={cancelReply}> Avbryt </button>
                <button
                  class="btn btn-primary btn-sm"
                  onclick={() => addReply(comment.id)}
                  disabled={!replyText.trim()}
                >
                  Send svar
                </button>
              </div>
            </div>
          {/if}

          <!-- Replies -->
          {#if replies[comment.id] && replies[comment.id].length > 0}
            <div class="mt-4 space-y-3 border-l-2 border-base-300 pl-4">
              {#each replies[comment.id] as reply}
                <div class="bg-base-200 rounded-lg p-3">
                  <div class="flex items-center space-x-2 mb-2">
                    <div class="avatar">
                      <div class="w-8 h-8 rounded-full">
                        <img src={reply.avatar} alt={reply.name} />
                      </div>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center space-x-2">
                        <span class="font-semibold text-sm">{reply.name}</span>
                        {#if reply.verified}
                          <iconify-icon class="text-success text-xs" icon="lucide:check"></iconify-icon>
                        {/if}
                        {#if reply.isAdmin}
                          <iconify-icon class="text-primary text-xs" icon="lucide:shield-check"></iconify-icon>
                        {/if}
                      </div>
                      <div class="text-xs opacity-70">
                        {formatDate(reply.date)}
                      </div>
                    </div>
                  </div>
                  <div class="prose prose-sm max-w-none text-base-content">
                    {@html reply.text}
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}

    {#if comments.length === 0}
      <div class="text-center py-8 opacity-70">
        <iconify-icon icon="lucide:message-circle" class="text-4xl mb-2"></iconify-icon>
        <p>Ingen kommentarer ennå. Vær den første til å kommentere!</p>
      </div>
    {/if}
  </div>

  <!-- Add Comment Form -->
  <div class="mt-8 card bg-base-100 shadow-sm">
    <div class="card-body p-4">
      {#if isLoggedIn()}
        <h4 class="font-semibold">Legg til kommentar</h4>
        <div class="label">
          <span class="text-base-content opacity-70">
            Du kan bruke markdown
            <iconify-icon icon="lucide:zap" class="text-warning"></iconify-icon>
          </span>
        </div>
        <div class="form-control">
          <textarea
            class="textarea w-full resize-none"
            placeholder="Skriv en kommentar... (Markdown støttes)"
            rows="4"
            bind:value={commentText}
          ></textarea>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onclick={addComment} disabled={!commentText.trim()}>
            <iconify-icon icon="lucide:send"></iconify-icon>
            Send kommentar
          </button>
        </div>
        {#if commentError}
          <div class="alert alert-error mt-3">
            <iconify-icon icon="lucide:alert-circle"></iconify-icon>
            {commentError}
          </div>
        {/if}
      {:else}
        <div class="text-center py-6">
          <iconify-icon icon="lucide:lock" class="text-3xl mb-2 opacity-50"></iconify-icon>
          <p class="opacity-70">Du må være innlogget for å kommentere</p>
          <a href="/login">
            <button class="btn btn-primary btn-sm mt-2"> Logg inn </button>
          </a>
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  @reference "$root/src/app.css";

  iconify-icon {
    display: inline-block;
    font-size: inherit;
    width: 1em;
    height: 1em;
  }

  .prose :global(.blocked-word) {
    background-color: black;
    color: black;
    @apply hover:no-underline hover:text-inherit hover:bg-inherit;
  }

  .prose :global(.link) {
    @apply text-primary hover:underline;
  }

  .prose :global(a) {
    @apply text-primary hover:underline;
  }
</style>
