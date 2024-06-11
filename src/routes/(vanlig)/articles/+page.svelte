<script>
  import PocketBase from "pocketbase";
  import { MetaTags } from "svelte-meta-tags";
  import ArticleCard from "$lib/components/articleCard.svelte";

  const pb = new PocketBase("https://db.080609.xyz");

  export let data;

  let articles = data.articles;
  let doneLoading = true;

  async function getArticles() {
    // Import all articles from the database
    articles = await pb.collection("art_articles").getFullList({
      fields:
        "name, date, description, image, artId, id, collectionId, collectionName  ",
    });

    for (let i = 0; i < articles.length; i++) {
      // Fetch the image
      let image = pb.files.getUrl(articles[i], articles[i].image);
      articles[i].image = image;
    }
    doneLoading = true;
  }

  //* Moved to page.ts
  //getArticles();
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

<div
  class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-ctp-base p-6 grid grid-container gap-2"
>
  {#if doneLoading}
    {#each articles as article}
      <ArticleCard
        title={article.name}
        date={article.date}
        description={article.description}
        link={"/a/" + article.artId}
        image={article.image}
      />
    {/each}
  {:else}
    <h3 class="text-xl">Laster artikler...</h3>
  {/if}
</div>

<div class="w-full mx-auto p-6 gap-2 dark:bg-ctp-base dark:text-white">
  <h2 class="text-2xl">Alle Artikler</h2>
  <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
      2024
      <ol class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>
          Mars
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              <a href="/rebrand" class="hover:underline text-blue-600"
                >Vi har byttet navn!</a
              >
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ul>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
</style>
