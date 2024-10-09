<script lang="ts">
  import "iconify-icon";
  import { MetaTags } from "svelte-meta-tags";
  import { onMount, tick } from "svelte";
  import Fuse from "fuse.js";
  import type { IFuseOptions } from "fuse.js";

  import ArticleCard from "$lib/components/articleCard.svelte";
  import Search from "$lib/components/search.svelte";

  export let data;

  let msnry: any

  const allArticles = data.articles;
  let articles = allArticles; // Initialize with all articles

  const fuseOptions: IFuseOptions<any> = {
    keys: [{ name: "name" }, { name: "description" }],
    minMatchCharLength: 3,
    useExtendedSearch: false,
    ignoreLocation: true,
    findAllMatches: true,
    includeMatches: true,
    includeScore: true,
  }
  // Create Fuse index
  const fuseIndex = Fuse.createIndex(fuseOptions.keys, allArticles);

  async function search(term) {
    const fuse = new Fuse(allArticles, fuseOptions, fuseIndex);
    const result = fuse.search(term);

    console.log(result);
    
    articles = result.map((result) => result.item);
    await tick(); // Wait for the DOM to update
    msnry.reloadItems()
    msnry.layout()
  }

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

    const imagesLoaded = new ImagesLoaded(msnry.element);

    imagesLoaded.on("progress", function (instance, image) {
      msnry.layout();
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
  <Search onSubmit={(event) => search(event.target[0].value)} />
  <div class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center">
    <!-- <div
    class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2"
  > -->
    <div class="grid grid-container gap-8 w-full">
      {#each articles as article}
        <ArticleCard
          title={article.name}
          date={article.date}
          description={article.description}
          link={"/a/" + article.artId}
          image={article.image}
          width="300px"
          class="mt-8 grid-item"
        />
      {/each}
    </div>
  </div>
{:else}
  <div class="mx-auto text-center flex flex-col justify-center items-center">
    <h2 class="text-2xl">Uh oh, vi støttet på en feil.</h2>
    <iconify-icon icon="svg-spinners:wifi-fade" width="80" height="80" class="text-red-500" />
    <p>{data.errorMessage}</p>
  </div>
{/if}

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
</style>
