<script lang="ts">
  import Metatags from "$lib/components/metatags.svelte";
  import Comments from "$lib/components/comments.svelte";
  import ArticleRenderer from "./renderer.svelte";
  import "iconify-icon";
  import "katex/dist/katex.min.css";
  import "highlight.js/styles/obsidian.css";
  import "$lib/css/md-article.css";
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
  let image = getImageUrl(data.article.image?.id || "", {
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

<div>
  <div
    class="p-6 lg:max-w-6xl mx-auto my-8 bg-base-200 text-base-content rounded-xl shadow#articleText items-center space-x-4"
  >
    <div>
      <!-- svelte-ignore a11y_img_redundant_alt -->
      {#if image}
        <img
          src={image}
          width={data.article.image.width}
          height={data.article.image.height}
          class="w-screen max-h-180 object-cover rounded-3xl"
          alt="Article Image"
          id="articleImg"
        />
      {/if}
      <h1 class="text-2xl font-medium">
        {name}
      </h1>
      <p class="text-base-content/70">
        <span class="icon-[mdi--account] h-5 w-5"></span>
        {author}
      </p>
      <p class="text-base-content/70">
        <span class="icon-[mdi--calendar] h-5 w-5"></span>
        {formatDate(date)}
      </p>
      <div id="articleText" class="max-w-full md-text m-9">
        <ArticleRenderer article={data.article} />
      </div>
      <Comments id={artId} />
    </div>
  </div>
</div>
