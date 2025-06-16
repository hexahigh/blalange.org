<script lang="ts">
  import { A, Alert } from "flowbite-svelte";
  import * as m from "$lib/paraglide/messages.js";
  import Metatags from "$lib/components/metatags.svelte";
  import Comments from "$lib/components/comments.svelte";
  import ArticleRenderer from "./renderer.svelte";
  import "iconify-icon";
  import "katex/dist/katex.min.css";
  import "highlight.js/styles/obsidian.css";
  import { getImageUrl } from "$root/src/lib/js/directus";

  import type { DataType, ArticleLoaded } from "./types";

  interface Props {
    data: DataType;
  }

  let { data }: Props = $props();

  function getAuthors(article: ArticleLoaded): string {
    if (!article.authors || article.authors.length === 0) {
      return "Unknown Author";
    }

    // Join all author names into a single string. If there are multiple authors, they will be separated by commas, last one by "&".
    return article.authors
      .map((author) => author.art_authors_id.name)
      .filter((name) => name) // Filter out any undefined or empty names
      .join(", ")
      .replace(/, ([^,]*)$/, " & $1");
  }

  let name = data.article.name;
  let date = data.article.date;
  let author = getAuthors(data.article);
  let description = data.article.description;
  let image = getImageUrl(data.article.image.id || "", {
    format: "auto",
  });
  let artId = data.article.art_id;

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
  class="p-6 lg:max-w-6xl mx-auto mt-4 bg-m-mantle text-m-mantle-text rounded-xl shadow#articleText items-center space-x-4"
>
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    {#if image}
      <img src={image} width={data.article.image.width} height={data.article.image.height} class="w-screen max-h-180 object-cover rounded-3xl" alt="Article Image" id="articleImg" />
    {/if}
    <h1 class="text-2xl font-medium">
      {name}
    </h1>
    <p class="text-m-mantle-subtext0">
      <iconify-icon icon="mdi:account" width="20" height="20"></iconify-icon>
      {author}
    </p>
    <p class="text-m-mantle-subtext0">
      <iconify-icon icon="mdi:calendar" width="20" height="20"></iconify-icon>
      {formatDate(date)}
    </p>
    <div id="articleText" class="prose sm:prose-sm lg:prose-lg xl:prose-xl dark:prose-invert text-m-mantle-text max-w-full md-text m-9">
      <ArticleRenderer article={data.article} />
    </div>
    <Comments id={artId} />
  </div>
</div>
