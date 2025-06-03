<!--
  @component renderer
  
  This Svelte component is responsible for rendering articles in either "markdown" or "blocks" format.
  It supports advanced Markdown features, math rendering, syntax highlighting, and responsive images.

  Features:
    - Markdown rendering using unified, remark, and rehype plugins:
      - remark-parse: Parses markdown text.
      - remark-rehype: Converts markdown AST to HTML AST.
      - remark-gfm: Adds GitHub Flavored Markdown support.
      - remark-math & rehype-katex: Renders math expressions.
      - rehype-highlight: Syntax highlighting for code blocks.
      - rehype-slug: Adds slugs to headings.
      - rehype-stringify: Converts HTML AST to HTML string.
    - Responsive images for "block_image" blocks using <picture> and multiple formats (webp, avif, jpg).
    - Generates srcset attributes for images at various widths for optimal loading.

  Notes:
    - This component does not apply any styles directly and expects styles to be handled externally.
-->
<script lang="ts">
  import remarkParse from "remark-parse";
  import remarkRehype from "remark-rehype";
  import remarkGfm from "remark-gfm";
  import remarkMath from "remark-math";
  import rehypeStringify from "rehype-stringify";
  import rehypeKatex from "rehype-katex";
  import rehypeHighlight from "rehype-highlight";
  import rehypeSlug from "rehype-slug";
  import { unified } from "unified";
  import { getImageUrl } from "$root/src/lib/js/directus";

  import type { ArticleLoaded } from "./types";

  type Props = {
    article: ArticleLoaded;
  };
  let { article }: Props = $props();

  function generateSrcset(
    image: ArticleLoaded["image"],
    widths: number[],
    format: "auto" | "jpg" | "png" | "webp" | "tiff" | "avif",
  ): string {
    // Generate a srcset string for the image with the specified widths and format + one at the original size
    return widths
      .concat([image.width])
      .map((width) => {
        const url = getImageUrl(image.id, { format, width });
        return `${url} ${width}w`;
      })
      .join(", ");
  }

  let mdStuff = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(remarkMath)
    .use(rehypeStringify)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeSlug);
</script>

{#if article?.type === "markdown"}
  <div>{@html mdStuff.processSync(article.text || "")}</div>
{:else if article?.type === "blocks"}
  <div>
    {#each article.blocks?.slice().sort((a, b) => a.sort - b.sort) as block (block.id)}
      {#if block.collection === "block_markdown"}
        <div>{@html mdStuff.processSync(block.item.content || "")}</div>
      {:else if block.collection === "block_image"}
        <figure>
          <picture>
            <source
              srcset={`${generateSrcset(block.item.image, [640, 960, 1280, 1920, 2560], "webp")}`}
              type="image/webp"
              sizes="100vw"
            />
            <source
              srcset={`${generateSrcset(block.item.image, [640, 960, 1280, 1920, 2560], "avif")}`}
              type="image/avif"
              sizes="100vw"
            />
            <source
              srcset={`${generateSrcset(block.item.image, [640, 960, 1280, 1920, 2560], "jpg")}`}
              type="image/jpeg"
              sizes="100vw"
            />
            <img
              src={getImageUrl(block.item.image.id, {
                format: "jpg",
                width: 1920, // If the client does not support picture then there is probably no need to load a larger image
              })}
              alt={block.item.alt || ""}
              width={1920}
              height={(block.item.image.height / block.item.image.width) * 1920}
            />
          </picture>
          {#if block.item.description}
            <figcaption>{block.item.description}</figcaption>
          {/if}
        </figure>
      {/if}
    {/each}
  </div>
{/if}
