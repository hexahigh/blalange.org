<script>
  import sites from "./data.json";
</script>

<div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-8 p-10 w-full min-h-screen bg-black">
  {#each sites as site (site.id)}
    <div>
      <a href={site.url}>
        <img
          src={site.imageUrl}
          alt={site.name}
          class="object-cover w-full h-auto rounded-md"
        />
      </a>
    </div>
  {/each}
</div>
