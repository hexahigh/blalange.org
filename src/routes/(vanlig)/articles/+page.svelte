<script lang="ts">
  import "iconify-icon";
  import { MetaTags } from "svelte-meta-tags";
  import { onMount, tick } from "svelte";
  import Fuse from "fuse.js";
  import type { IFuseOptions } from "fuse.js";
  import { writable, get } from "svelte/store";

  import Search from "$lib/components/search.svelte";
  import type Masonry from "masonry-layout";
  import { languageTag } from "$lib/paraglide/runtime.js";
  import * as m from "$lib/paraglide/messages.js";
  import { getImageUrl } from "$root/src/lib/js/directus";
  import ArticleCard from "./card.svelte";

  interface Props {
    // In SvelteKit, page data is passed in via `export let data;`
    data: { articles: any[]; errorOccurred: boolean; errorMessage: string };
  }

  let { data }: Props = $props();

  let articlesStore = writable(data.articles);

  let searchOptions = $state({
    showHidden: false,
    showDrafts: false,
    showArchived: false,
  });

  let displayOptions = $state({
    showFeatured: true,
  });

  let articles = $state(
    data.articles
      .filter((article) => {
        return article.name && article.date && article.art_id && article.image;
      })
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }),
  );

  const fuseOptions: IFuseOptions<any> = {
    keys: [{ name: "name" }, { name: "description" }],
    minMatchCharLength: 3,
    threshold: 0.3,
    useExtendedSearch: false,
    ignoreLocation: true,
    findAllMatches: true,
    includeMatches: true,
    includeScore: true,
  };
  // Create Fuse index
  const fuseIndex = Fuse.createIndex(fuseOptions.keys, data.articles);

  async function search(term) {
    const fuse = new Fuse(data.articles, fuseOptions, fuseIndex);
    let result = [];

    let a = articles;

    if (term) {
      result = fuse.search(term);

      a = result.map((result) => result.item);
      displayOptions.showFeatured = false;
    } else {
      a = data.articles;
      displayOptions.showFeatured = true;
    }

    articlesStore.set(a);

    // await tick(); // Wait for the DOM to update
  }

  articlesStore.subscribe((value) => {
    // Filter articles based on search options
    if (!searchOptions.showHidden) {
      value = value.filter((article) => article.status != "hidden");
    }
    if (!searchOptions.showDrafts) {
      value = value.filter((article) => article.status != "draft");
    }
    if (!searchOptions.showArchived) {
      value = value.filter((article) => article.status != "archived");
    }
    articles = value
      .filter((article) => {
        return article.name && article.date && article.art_id && article.image;
      })
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
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
  <Search
    placeholder={m.articleList_search_placeholder()}
    onSubmit={(e) => {
      e.preventDefault();
      search(e.target[0].value);
    }}
  />
  {#if articles.length > 0}
    <div class="w-full flex justify-center">
      <div class="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {#key articles}
          {#each articles as article, i}
            <div class="{i === 0 && displayOptions.showFeatured ? 'md:col-span-2' : ''} flex">
              <ArticleCard
                title={article.name}
                date={article.date}
                link={"/a/" + article.art_id}
                image={{
                  src: getImageUrl(article.image.id, {
                    width: 1000,
                    format: "auto",
                  }),
                  width: article.image.width,
                  height: article.image.height,
                }}
                featured={i === 0 && displayOptions.showFeatured}
                class="w-full"
              />
            </div>
          {/each}
        {/key}
      </div>
    </div>
  {:else}
    <div class="mx-auto text-center flex flex-col justify-center items-center">
      <h2 class="text-2xl">{m.articleList_search_noResults()}</h2>
      <iconify-icon icon="ooui:article-not-found-ltr" width="80" height="80" class="text-blue-500"></iconify-icon>
      <p>{m.articleList_search_tryAnother()}</p>
    </div>
  {/if}
{:else}
  <div class="mx-auto text-center flex flex-col justify-center items-center">
    <h2 class="text-2xl">{m.articleList_error()}</h2>
    <iconify-icon icon="svg-spinners:wifi-fade" width="80" height="80" class="text-red-500"></iconify-icon>
    <p>{data.errorMessage}</p>
  </div>
{/if}
