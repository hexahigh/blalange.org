<script lang="ts">
  import * as blocks from "./index";

  type Props = {
    content: Content;
    options?: { fileDomain?: string };
  };

  let { content, options = { fileDomain: "https://db.blalange.org" } }: Props = $props();

  const blockComponents = {
    paragraph: blocks.Paragraph,
    table: blocks.Table,
    image: blocks.Image,
    header: blocks.Header,
    nestedlist: blocks.NestedList,
    delimiter: blocks.Delimiter,
    quote: blocks.Quote
  };

  // We don't support toggles/accordions yet so we remove it and the items inside
  for (let i = content.blocks.length - 1; i >= 0; i--) {
    if (content.blocks[i].type === "toggle") {
      content.blocks.splice(i, (content.blocks[i].data as ToggleBlockData).items + 1); // Deletes child items and the toggle
    }
  }
</script>

{#each content.blocks as block}
  <div data-block-id={block.id} data-block-type={block.type}>
    <svelte:component this={blockComponents[block.type]} data={block.data} fileDomain={options.fileDomain} />
  </div>
{/each}

<!-- {#each content.blocks as block}
{@const Component = blockComponents[block.type]}
  <div data-block-id={block.id} data-block-type={block.type}>
    <Component
      this={blockComponents[block.type]}
      data={block.data}
      fileDomain={options.fileDomain}
    />
  </div>
{/each} -->
