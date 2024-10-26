<script lang="ts">

  import { Alert } from "flowbite-svelte";
  import { t, locale } from "$lib/js/translations"
  import { get } from "svelte/store";
  import Metatags from "$lib/components/metatags.svelte";
  import Comments from "$lib/components/comments.svelte";
  import "iconify-icon";
  import { type DataType } from "./types";
  import "katex/dist/katex.min.css";
  interface Props {
    data: DataType;
  }

  let { data }: Props = $props();

  const translations = data.article.translations;
  const currentLocale = get(locale);

  let name = data.translations?.[currentLocale]?.name || data.article.name;
  let date = data.article.date;
  let author = data.author;
  let description = data.translations?.[currentLocale]?.description || data.article.description;
  let text = data.translations?.[currentLocale]?.text || data.text;
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
    <!-- svelte-ignore a11y_img_redundant_alt -->
    {#if image}
      <img src={image} class="w-screen aspect-[16/9] object-contain rounded-lg" alt="Article Image" />
    {/if}
    <h1 class="text-2xl font-medium">
      {name}
    </h1>
    <p class="text-gray-500 dark:text-gray-300">
      <iconify-icon icon="mdi:account" width="20" height="20"></iconify-icon>
      {author}
    </p>
    <p class="text-gray-500 dark:text-gray-300">
      <iconify-icon icon="mdi:calendar" width="20" height="20"></iconify-icon>
      {formatDate(date)}
    </p>
    {#if !data.translations?.[currentLocale]?.text}
      <Alert border color="blue">
        <iconify-icon icon="mdi:information" width="24" height="24"></iconify-icon>
        <span class="font-medium">{$t("article.warning.notTranslated.header")}</span>
        <p>{$t("article.warning.notTranslated.body")}</p>
      </Alert>
    {/if}
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
