<script lang="ts">
  export let data: DataType;

  import Metatags from "$lib/components/metatags.svelte";
  import Comments from "$lib/components/comments.svelte";
  import "iconify-icon";
  import { type DataType } from "./types";
  import "katex/dist/katex.min.css";

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

<Metatags
  title={name}
  {description}
  url={`https://blalange.org/a/${artId}`}
  images={[{ url: image, alt: "Article Image" }]}
/>

<div
  class="p-6 max-w-6xl mx-auto mt-4 bg-white rounded-xl text-black shadow-md flex items-center space-x-4 dark:bg-gray-800 dark:text-white"
>
  <div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    {#if image}
    <!-- style="background: radial-gradient(ellipse at center, {averageColor} 0%, transparent 175%);" -->
      <img src={image} class="w-screen lg:aspect-[16/9] object-contain rounded-3xl" alt="Article Image" id="articleImg" />
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
    @apply leading-6;
  }

  /* Adds a top margin to 'h2', 'h3', 'p', 'ul', 'ol' */
  #articleText :global(h2),
  #articleText :global(h3),
  #articleText :global(ul),
  #articleText :global(ol),
  #articleText :global(p) {
    @apply mt-6;
  }

  /* Does not add a top margin to 'p' if it is underneath 'h2' or 'h3' */
  #articleText :global(h2) + :global(p),
  #articleText :global(h3) + :global(p) {
    @apply mt-0;
  }

  /* Does not add a top margin to 'ol' or 'ul' if they are underneath 'h2', 'h3' or 'p' */
  #articleText :global(h2) + :global(ol),
  #articleText :global(h2) + :global(ul),
  #articleText :global(h3) + :global(ol),
  #articleText :global(h3) + :global(ul),
  #articleText :global(p) + :global(ol),
  #articleText :global(p) + :global(ul) {
    @apply mt-0;
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

  #articleText :global(ul li) {
    @apply ml-4;
  }

  #articleText :global(ol li) {
    @apply ml-4;
  }

  #articleText :global(blockquote) {
    @apply bg-gray-100 p-4 my-4;
  }

  #articleText :global(pre) {
    @apply bg-gray-100 p-4 my-4;
  }

  #articleText :global(code) {
    @apply text-sm bg-gray-300 px-2 py-1 rounded;
  }
</style>
