<script>
  import { MetaTags } from "svelte-meta-tags";
  import Comments from "./comments.svelte";
  import "iconify-icon";

  export let img;
  export let title;
  export let author;
  export let date;
  export let description;
  export let url;

  function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleString();
  }
</script>

<!--
    @component
    ## article.svelte
    @prop {string} img - The URL of the image to display in the card.
    @prop {string} title - The title of the article.
    @prop {string} author - The author of the article.
    @prop {string} date - The date of the article. Format: "dd.mm.yyyy"
    @prop {string} description - A brief description of the article.
    @prop {string} url - The URL to navigate to when the card is clicked.
-->

<MetaTags
  {title}
  titleTemplate="%s | Blålange"
  {description}
  canonical="https://blalange.org/a/{url}"
  openGraph={{
    url: `https://blalange.org/a/${url}`,
    title: `${title} | Blålange`,
    description: description,
    siteName: "Blålange festivalen",
  }}
/>

<div
  class="p-6 max-w-6xl mx-auto mt-4 bg-white rounded-xl text-black shadow-md flex items-center space-x-4 dark:bg-gray-800 dark:text-white"
>
  <div>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={img}
      class="w-screen aspect-[16/9] object-contain rounded-lg"
      alt="Article Image"
    />
    <div class="text-xl font-medium">
      {title}
    </div>
    <p class="text-gray-500 dark:text-gray-300">
      <iconify-icon icon="mdi:account" width="20" height="20" />
      {author}
    </p>
    <p class="text-gray-500 dark:text-gray-300">
      <iconify-icon icon="mdi:calendar" width="20" height="20" />
      {formatDate(date)}
    </p>
    <div class="m-9 text-gray-800 dark:text-gray-300">
      <slot />
    </div>
    <Comments id={url} />
  </div>
</div>