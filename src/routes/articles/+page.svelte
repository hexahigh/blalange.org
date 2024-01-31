<script>
  import Nav from "../Nav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import herremann from "$lib/img/people/herremann.jpg";
  import ArticleCard from "$lib/components/articleCard.svelte"
</script>

<nav />
<div
  class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>
<ArticleCard image={cicignonPreview} title="lorem ipsum" description="lorem ipsum" link="https://example.com"/>

</div>
