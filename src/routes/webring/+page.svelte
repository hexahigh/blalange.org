<script>
  import sites from "./data.json";
 
  async function isValidImageURL(url) {
     const response = await fetch(url);
     return response.status === 200 && response.headers.get('content-type').startsWith('image');
  }
 </script>
 
 <div class="grid grid-cols-8 gap-9 p-10 bg-black w-full">
  {#each sites as site (site.id)}
     {#await isValidImageURL(site.imageUrl)}
       <!-- Waiting for the image URL to be checked -->
     {:then isValid}
       {#if isValid}
         <a href={site.url}>
           <img
             src={site.imageUrl}
             alt={site.name}
             class="object-cover w-full h-auto rounded-md"
           />
         </a>
       {/if}
     {:catch error}
       <!-- An error occurred while checking the image URL -->
     {/await}
  {/each}
 </div>