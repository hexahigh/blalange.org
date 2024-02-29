<script>
  import { MetaTags } from "svelte-meta-tags";
  import Nav from "../Nav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import herremann from "$lib/img/people/herremann.jpg";
  import hugo2 from "$lib/img/people/hugo2.jpg"
  import ArticleCard from "$lib/components/articleCard.svelte";
  import { LoremIpsum } from "lorem-ipsum";

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
</script>

<MetaTags
  title="Balleblad"
  titleTemplate="%s | Kukfest"
  description="Nyhetssiden til Kukfest"
  canonical="https://kukfest.eu/articles/"
  openGraph={{
    url: "https://kukfest.eu/articles",
    title: "Balleblad | Kukfest",
    description: "Nyhetssiden til Kukfest",
    images: [
      {
        url: "https://kukfest.eu/img/favicon.png",
        width: 300,
        height: 300,
        alt: "Kukfest logo",
      },
    ],
    siteName: "Kukfest",
  }}
/>

<Nav />
<div
  class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 grid grid-container gap-2"
>
  <ArticleCard
    image={hugo2}
    date="04.02.2024"
    title="Homofil anal-sex skandale på Cicignon Skole"
    description="Det er rykter om at Hugo Holmquist og Patryk Kåre Kadziolka har hatt anal sex i gutte garderoben til Cicignon skole"
    link="/hugotiss"
  />
</div>

<div class="w-full mx-auto p-6 gap-2">
  <h2 class="text-2xl">Alle Artikler</h2>
  <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
      2024
      <ol class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>
          Februar
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              <a
                href="/hugotiss"
                class="hover:underline text-blue-600">Homofil anal-sex skandale på Cicignon Skole</a
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
