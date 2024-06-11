<script>
  import PocketBase from "pocketbase";
  import { MetaTags } from "svelte-meta-tags";
  import ArticleCard from "$lib/components/articleCard.svelte";

  const pb = new PocketBase("https://db.080609.xyz");

  export let data;

  let articles = data.articles;
</script>

<MetaTags
  title="Balleblad"
  titleTemplate="%s | Blålange"
  description="Nyhetssiden til Blålange festivalen"
  canonical="https://blalange.org/articles/"
  openGraph={{
    url: "https://blalange.org/articles",
    title: "Balleblad | Blålange",
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
  <div
    class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-ctp-base p-6 grid grid-container gap-2"
  >
    {#each articles as article}
      <ArticleCard
        title={article.name}
        date={article.date}
        description={article.description}
        link={"/a/" + article.artId}
        image={article.image}
      />
    {/each}
  </div>
{:else}
  <h2 class="text-2xl">Uh oh, vi støttet på en feil.</h2>
  <p>{data.errorMessage}</p>
{/if}

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
</style>
