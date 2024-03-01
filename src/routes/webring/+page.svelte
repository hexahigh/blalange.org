<script>
  import sites from "./data.json";
</script>

<div class="flex flex-row flex-wrap gap-8 p-10 w-full min-h-screen bg-black">
  {#each sites as site}
    <div class="min-w-256 min-h-256">
      <a href={site.url}>
        <img
          src={site.imageUrl}
          alt={site.name}
          class="object-fill rounded-xl"
          loading="lazy"
          width="240"
        />
      </a>
    </div>
  {/each}
</div>
