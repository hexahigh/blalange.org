<script>
  import Nav from "../Nav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import herremann from "$lib/img/people/herremann.jpg";
  import ArticleCard from "$lib/components/articleCard.svelte";
</script>

<nav />
<div
  class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
>
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
    link="https://example.com"
  />
  <ArticleCard
    image={cicignonPreview}
    title="lorem ipsum"
    description="lorem ipsum"
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
              <a href="https://example.com" class="hover:underline text-blue-600"
                >lorem ipsum</a
              >
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ul>
</div>
