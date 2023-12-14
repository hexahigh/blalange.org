<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";

  let data = [];

  onMount(async () => {
    const pb = new PocketBase("https://db.080609.xyz");
    data = await pb.collection("form").getFullList(200 /* batch size */, {
      sort: "-created",
    });
  });
</script>

<style>
  .data-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
</style>

{#each data as item (item.id)}
  <div class="data-item">
    <p><strong>Name:</strong> {item.name}</p>
    <p><strong>Email:</strong> {item.email}</p>
    <p><strong>Extra:</strong> {item.extra}</p>
    <p><strong>Age:</strong> {item.age}</p>
    <p><strong>LatLon:</strong> {item.latlon}</p>
    <p><strong>Filmed:</strong> {item.filmed}</p>
    <p><strong>MW:</strong> {item.MW}</p>
  </div>
{/each}