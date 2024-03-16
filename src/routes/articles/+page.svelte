<script>
	import rebrand_logo from '$lib/img/article/rebrand_logo.png';
  import { MetaTags } from "svelte-meta-tags";
  import Nav from "../Nav.svelte";
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

<Nav />
<div
  class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 grid grid-container gap-2"
>
  <ArticleCard
    image={rebrand_logo}
    date="07.03.2024"
    title="Vi har byttet navn!"
    description="Vi har ditcha Kukfest branden og har byttet navn"
    link="/rebrand"
  />
</div>

<div class="w-full mx-auto p-6 gap-2">
  <h2 class="text-2xl">Alle Artikler</h2>
  <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
      2024
      <ol class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>
          Mars
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              <a
                href="/rebrand"
                class="hover:underline text-blue-600">Vi har byttet navn!</a
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
