<script>
  import { MetaTags } from "svelte-meta-tags";
  import Nav from "../Nav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import herremann from "$lib/img/people/herremann.jpg";
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

<svelte:head>
  <MetaTags
    title="Balleblad"
    titleTemplate="%s | Kukfest"
    description="Nyhetssiden til Kukfest"
    canonical="https://kukfest.eu/articles/"
    openGraph={{
      url: "https://www.url.ie/a",
      title: "Balleblad | Kukfest",
      description: "Nyhetssiden til Kukfest",
      images: [
        {
          url: "https://www.example.ie/og-image-01.jpg",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      siteName: "Kukfest",
    }}
  />
</svelte:head>

<nav />
<div
  class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 grid grid-container gap-2"
>
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title={lorem.generateWords(3)}
    description={lorem.generateSentences(1)}
    link="https://example.com"
  />
</div>

<div class="w-full mx-auto p-6 gap-2">
  <h2 class="text-2xl">Alle Artikler</h2>
  <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
      2024
      <ol class="ps-5 mt-2 space-y-1 list-disc list-inside">
        <li>
          Januar
          <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              <a
                href="https://example.com"
                class="hover:underline text-blue-600">lorem ipsum</a
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
