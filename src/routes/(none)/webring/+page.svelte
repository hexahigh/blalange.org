<script>
  import sites from "./data.json";
</script>

<div class="grid grid-cols-3 gap-4 bg-black">
  {#each sites as site (site.id)}
    <a href={site.url}>
      <img
        src={site.imageUrl}
        alt={site.name}
        class="object-cover w-full h-auto"
      />
    </a>
  {/each}
</div>
