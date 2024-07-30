<script lang="ts">
  import PocketBase from "pocketbase";
  import { defaultConfig, config } from "$lib/js/config";
  import Metatags from "$lib/components/metatags.svelte";
  import { onMount } from "svelte";

  const pb = new PocketBase(defaultConfig.dbEndpoint);

  let message;
  let messageType = "info";

  let profilePicture
  let selectedFile; // Variable to hold the reference to the selected file

  function isLoggedIn() {
    if (!pb) return; // Ensure PocketBase is initialized
    return pb.authStore.isValid;
  }

  async function getPfp() {
    if (!pb || !pb.authStore.isValid) return; // Ensure PocketBase is initialized

    const record = await pb.collection("users").getOne(pb.authStore.model.id);

    return pb.files.getUrl(record, record.avatar, {
      thumb: "100x100",
    });
  }

  async function savePfp() {
    if (!pb || !pb.authStore.isValid || !selectedFile) return; // Ensure PocketBase is initialized and a file is selected

    try {
      await pb.collection("users").update(pb.authStore.model.id, {
        avatar: selectedFile,
      });

      message = "Profilbildet ble lagret.";
      messageType = "success";

      profilePicture = await getPfp(); // Refresh the profile picture after successful upload
    } catch (error) {
      console.error("Feil under opplasting av profilbilde:", error);
      message = "Kunne ikke lagre profilbildet.";
      messageType = "error";
    }
  }

  function handleFileSelect(event) {
    selectedFile = event.target.files[0]; // Update the selectedFile variable on file selection
    profilePicture = URL.createObjectURL(selectedFile);
  }

  onMount(async () => {
    profilePicture = await getPfp();
  });
</script>

<Metatags
  title="Innstillinger"
  description="Innstillinger for blalange.org"
/>

<section class="dark:bg-gray-900">
  <div class="flex flex-col px-6 py-8 md:h-screen lg:py-0">
    <h1 class="text-3xl font-bold mb-4">Innstillinger</h1>
    {#if message}
      {#if messageType == "error"}
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
          {message}
        </div>
      {:else if messageType == "info"}
        <div
          class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          {message}
        </div>
      {:else if messageType == "success"}
        <div
          class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          {message}
        </div>
      {/if}
    {/if}
    {#if isLoggedIn()}
      <div>
        <h2 class="text-2xl font-bold mb-4">Konto innstillinger</h2>
        <div class="border-dotted border-2 border-primary-500 rounded-lg p-2">
          <h3 class="text-xl font-bold mb-4">Profilbilde:</h3>
          <img src={profilePicture} alt="Profilbilde" class="w-20 h-20 mb-4" />
          <div>
            <label for="profilePicture">Last opp ett nytt profilbilde</label>
            <input type="file" id="profilePicture" on:change={handleFileSelect} />
          </div>
          <button class="blue-button mt-4" on:click={savePfp}>Lagre profilbilde</button>
        </div>
      </div>
    {/if}
  </div>
</section>
