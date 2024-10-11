<script lang="ts">
  export let data: DataType;

  import PocketBase from "pocketbase";
  import { MetaTags } from "svelte-meta-tags";
  import Comments from "$lib/components/comments.svelte";
  import "iconify-icon";
  import { type DataType } from "./types";

  let name = data.article.name;
  let date = data.article.date;
  let author = data.author;
  let description = data.article.description;
  let text = data.text || data.article.text_wysiwyg;
  let image = data.imgUrl;
  let artId = data.article.artId;

  function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleString("no-nb");
  }
</script>

<MetaTags
  title={name}
  titleTemplate="%s | Blålange"
  {description}
  canonical="https://blalange.org/a/{artId}"
  openGraph={{
    url: `https://blalange.org/a/${artId}`,
    title: `${name} | Blålange`,
    description: description,
    siteName: "Blålange festivalen",
  }}
/>

<div
  class="p-6 max-w-6xl mx-auto mt-4 bg-white rounded-xl text-black shadow-md flex items-center space-x-4 dark:bg-gray-800 dark:text-white"
>
  <div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    {#if image}
      <img src={image} class="w-screen aspect-[16/9] object-contain rounded-lg" alt="Article Image" />
    {/if}
    <h1 class="text-2xl font-medium">
      {name}
    </h1>
    <p class="text-gray-500 dark:text-gray-300">
      <iconify-icon icon="mdi:account" width="20" height="20" />
      {author}
    </p>
    <p class="text-gray-500 dark:text-gray-300">
      <iconify-icon icon="mdi:calendar" width="20" height="20" />
      {formatDate(date)}
    </p>
    <div id="articleText" class="m-9 text-gray-800 dark:text-gray-300">
      {@html text}
    </div>
    <Comments id={artId} />
  </div>
</div>

<style lang="postcss">
  #articleText {
    white-space: pre-line;
    @apply leading-6;
  }

  #articleText :global(h2) {
    @apply text-xl font-medium;
  }

  #articleText :global(h3) {
    @apply text-lg font-medium;
  }

  #articleText :global(ol) {
    @apply list-decimal;
  }

  #articleText :global(ul) {
    @apply list-disc;
  }

  #articleText :global(a) {
    @apply text-blue-500 hover:underline;
  }
</style>
