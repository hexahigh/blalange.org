<script lang="ts">
  export let data: NestedListBlockData;
</script>

{#if data.style === "ordered"}
  <ol>
    {#each data.items as item}
      <li>{@html item.content}</li>
    {/each}
  </ol>
{:else}
  <ul>
    {#each data.items as item}
      <li>{@html item.content}</li>
    {/each}
  </ul>
{/if}