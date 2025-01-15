<script lang="ts">
  import Metatags from "$lib/components/metatags.svelte";
  import ChangelogFile from "$root/CHANGELOG.md?raw";
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import remarkGfm from "remark-gfm";
  import rehypeStringify from "rehype-stringify";
  import rehypeSlug from "rehype-slug";
  import { unified } from "unified";

  let mdStuff = unified().use(remarkParse).use(remarkRehype).use(remarkGfm).use(rehypeStringify).use(rehypeSlug);

  let html = mdStuff.processSync(ChangelogFile)
</script>

<Metatags title="Changelog" description="Changelog for blalange.org" url="/tos" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md-text prose dark:prose-invert">
  {@html html}
</div>
