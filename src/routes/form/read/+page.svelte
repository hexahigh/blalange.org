<script>
    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';
    import { MapContainer, TileLayer, Marker, Popup } from 'svelte-leaflet';
  
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
      <MapContainer style="height: 180px; width: 100%;" center={item.latlon} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={item.latlon}>
          <Popup>{item.name}'s location</Popup>
        </Marker>
      </MapContainer>
    </div>
  {/each}