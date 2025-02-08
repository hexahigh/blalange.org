<script lang="ts">
  import { Blockquote } from "flowbite-svelte";
  export let data: QuoteBlockData;
</script>

<Blockquote alignment={data.alignment}>{data.text}</Blockquote>
{#if data.caption}
  <div class="rounded h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
    {@html data.caption}
  </div>
{/if}
