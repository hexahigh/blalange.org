<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import { config, defaultConfig } from "$lib/js/config";

  let pb = new PocketBase(defaultConfig.dbEndpoint);

config.subscribe((value) => {
  pb = new PocketBase(value.dbEndpoint);
});

  let data = $state([]);
  let user = $state("");
  let pass = $state("");

  onMount(async () => {});

  async function getData() {
    data = await pb.collection("form").getFullList(200 /* batch size */, {
      sort: "-created",
    });
    data = data.map((item) => {
      item.imageUrl = pb.files.getUrl(item, item.image);
      return item;
    });
  }

  async function auth() {
    await pb.collection("users").authWithPassword(user, pass);
  }
</script>

<div class="border border-black w-max">
  <input bind:value={user} placeholder="user" class="w-10" />
  <input bind:value={pass} placeholder="pass" class="w-10" type="password" />
  <button onclick={auth}>Auth</button>
  <button onclick={getData} class="ml-6">Get data</button>
</div>
{#each data as item (item.id)}
  <div class="data-item">
    <img src={item.imageUrl} alt="Image" />
    <p><strong>Name:</strong> {item.name}</p>
    <p><strong>Email:</strong> {item.email}</p>
    <p><strong>Extra:</strong> {item.extra}</p>
    <p><strong>Age:</strong> {item.age}</p>
    <p><strong>UserAgent:</strong> {item.ua}</p>
    <p><strong>LatLon:</strong> {item.latlon}</p>
    <p><strong>Filmed:</strong> {item.filmed}</p>
    <p><strong>MW:</strong> {item.MW}</p>
    <p><strong>Time:</strong> {item.time}</p>
    <p><strong>TimeUTC:</strong> {item.timeutc}</p>
  </div>
{/each}

<style>
  .data-item {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .data-item p {
    border-right: 1px solid #ddd;
    padding: 10px;
  }
  .data-item p:last-child {
    border-right: none;
  }
</style>
