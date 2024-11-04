<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import * as m from "$lib/paraglide/messages.js";
  import Metatags from "$lib/components/metatags.svelte";
  import Comments from "$lib/components/comments.svelte";
  import "iconify-icon";
  import { type DataType } from "./types";
  import "katex/dist/katex.min.css";
  import "highlight.js/styles/obsidian.css";
  import "$lib/css/md-article.pcss";
  import { languageTag } from "$lib/paraglide/runtime";
  interface Props {
    data: DataType;
  }

  let { data }: Props = $props();

  const currentLocale = languageTag();

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
  class="p-6 max-w-6xl mx-auto mt-4 bg-white rounded-xl text-black shadow#articleText items-center space-x-4 dark:bg-gray-800 dark:text-white"
>
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    {#if image}
      <img
        src={image}
        class="w-screen lg:aspect-[16/9] object-contain rounded-3xl"
        alt="Article Image"
        id="articleImg"
      />
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
        <span class="font-medium">{m.article_notTranslated_header()}</span>
        <p>{m.article_notTranslated_body()}</p>
      </Alert>
    {/if}
    <div id="articleText" class="md-text m-9 text-gray-800 dark:text-gray-300">
      {@html text}
    </div>
    <Comments id={artId} />
  </div>
</div>