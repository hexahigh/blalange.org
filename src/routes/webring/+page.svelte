<script>
  import sites from "./data.json";
</script>

<div class="grid grid-cols-8 gap-9 p-10 bg-black w-full">
  {#each sites as site (site.id)}
    <a href={site.url}>
      <img
        src={site.imageUrl}
        alt={site.name}
        class="object-cover w-full h-auto rounded-md"
      />
    </a>
  {/each}
</div>
