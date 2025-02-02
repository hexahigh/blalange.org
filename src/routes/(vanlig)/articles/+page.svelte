<script lang="ts">
  import "iconify-icon";
  import { MetaTags } from "svelte-meta-tags";
  import { onMount, tick } from "svelte";
  import { get } from "svelte/store";
  import Fuse from "fuse.js";
  import type { IFuseOptions } from "fuse.js";

  import ArticleCard from "$lib/components/articleCard.svelte";
  import Search from "$lib/components/search.svelte";
  import type Masonry from "masonry-layout";
  import { languageTag } from "$lib/paraglide/runtime.js";
  import * as m from "$lib/paraglide/messages.js";

  let { data } = $props();

  let msnry: Masonry;

  let allArticles = $state(data.articles);
  let articles = $state(allArticles); // Initialize with all articles

  let onlyLanguage = $state(false);

  const fuseOptions: IFuseOptions<any> = {
    keys: [{ name: "name" }, { name: "description" }],
    minMatchCharLength: 3,
    useExtendedSearch: false,
    ignoreLocation: true,
    findAllMatches: true,
    includeMatches: true,
    includeScore: true,
  };
  // Create Fuse index
  const fuseIndex = Fuse.createIndex(fuseOptions.keys, allArticles);

  async function search(term) {
    const fuse = new Fuse(allArticles, fuseOptions, fuseIndex);
    let result = [];

    if (term) {
      result = fuse.search(term);

      articles = result.map((result) => result.item);
    } else {
      articles = allArticles;
    }

    // Filter out articles that don't match the selected language
    if (onlyLanguage) {
      articles = articles.filter((article) =>
        article.translations.some((translation) => translation.languages_code === languageTag()),
      );
    }

    await tick(); // Wait for the DOM to update
    msnry.reloadItems();
    msnry.layout();
  }

  $effect(() => {
    for (const article of allArticles) {
      // Find translation matching current locale
      const translations = article.translations;
      const currentLocale = languageTag();

      article.name =
        translations.find((translation) => translation.languages_code === currentLocale)?.name || article.name;
      article.description =
        translations.find((translation) => translation.languages_code === currentLocale)?.description ||
        article.description;
    }
  });

  let searchValue = $state("")
  $effect(() => {
    search(searchValue)
  }
)

  onMount(async () => {
    const Masonry = (await import("masonry-layout")).default;
    const ImagesLoaded = (await import("imagesloaded")).default;

    msnry = new Masonry(".grid-container", {
      columnWidth: 300,
      gutter: 32,
      itemSelector: ".grid-item",
      horizontalOrder: true,
      fitWidth: true,
    });

    const imagesLoaded = ImagesLoaded(".grid-container");

    imagesLoaded.on("progress", function (instance, image) {
      msnry.layout();
    });

    window["msnry"] = msnry;
  });
</script>

<MetaTags
  title="Blåblad"
  titleTemplate="%s | Blålange"
  description="Nyhetssiden til Blålange festivalen"
  canonical="https://blalange.org/articles/"
  openGraph={{
    url: "https://blalange.org/articles",
    title: "Blåblad | Blålange",
    description: "Nyhetssiden til Blålange festivalen",
    images: [
      {
        url: "https://blalange.org/img/favicon.png",
        width: 300,
        height: 300,
        alt: "Blålange logo",
      },
    ],
    siteName: "Blålange festivalen",
  }}
/>

{#if !data.errorOccurred}
  <div class="mx-auto text-center flex flex-col justify-center items-center gap-4">
    <Search bind:value={searchValue} onSubmit={(event) => search(event.target[0].value)} placeholder={m.articleList_search_placeholder()} />
    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input
          id="onlyLanguage"
          type="checkbox"
          bind:checked={onlyLanguage}
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <label for="onlyLanguage" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >{m.articleList_search_onlyLanguage()}</label
      >
    </div>
  </div>
  <div
    class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center"
    class:hidden={articles.length <= 0}
  >
    <div class="grid-container gap-8 w-full">
      {#each articles as article}
        <ArticleCard
          title={article.name}
          date={article.date}
          description={article.description}
          link={"/a/" + article.art_id}
          image={article.image}
          width="300px"
          class="mt-8 grid-item"
          buttonText={m.articleList_card_readMore()}
        />
      {/each}
    </div>
  </div>
  <div class="mx-auto text-center flex flex-col justify-center items-center" class:hidden={articles.length > 0}>
    <h2 class="text-2xl">{m.articleList_search_noResults()}</h2>
    <iconify-icon icon="ooui:article-not-found-ltr" width="80" height="80" class="text-blue-500"></iconify-icon>
    <p>{m.articleList_search_tryAnother()}</p>
  </div>
{:else}
  <div class="mx-auto text-center flex flex-col justify-center items-center">
    <h2 class="text-2xl">{m.articleList_error()}</h2>
    <iconify-icon icon="svg-spinners:wifi-fade" width="80" height="80" class="text-red-500"></iconify-icon>
    <p>{data.errorMessage}</p>
  </div>
{/if}

<style>
  /* This helps significantly reduce layout shift on the few browsers that support this */
  @supports (grid-template-rows: masonry) {
    .grid-container {
      align-items: center;
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      grid-template-rows: masonry;
    }
  }

  @supports not (grid-template-rows: masonry) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
  }
</style>
