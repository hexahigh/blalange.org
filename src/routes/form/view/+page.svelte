<script>
    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';
  
    let data = [];
  
    onMount(async () => {
      const pb = new PocketBase("https://db.080609.xyz");
      data = await pb.collection("form").get();
    });
  </script>
  
  {#each data as item (item.id)}
    <div>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.extra}</p>
      <p>{item.age}</p>
      <p>{item.filmed}</p>
      <p>{item.MW}</p>
    </div>
  {/each}