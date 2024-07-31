<script lang="ts">
  import PocketBase from "pocketbase";
  import { defaultConfig, config } from "$lib/js/config";
  import Metatags from "$lib/components/metatags.svelte";
  import { onMount } from "svelte";

  const pb = new PocketBase(defaultConfig.dbEndpoint);

  let profilePicture;

  let message;
  let messageType = "info";

  let CProfilePicture;
  let selectedFile; // Variable to hold the reference to the selected file

  let emailChange = {
    newEmail: "",
  };

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

      CProfilePicture = await getPfp(); // Refresh the profile picture after successful upload
    } catch (error) {
      console.error("Feil under opplasting av profilbilde:", error);
      message = "Kunne ikke lagre profilbildet.";
      messageType = "error";
    }
  }

  async function changeEmail() {
    if (!emailChange.newEmail) {
      messageType = "error";
      message = "Vennligst skriv inn en ny epost";
      return;
    }
    let result = await pb.collection("users").requestEmailChange(emailChange.newEmail);

    if (result) {
      messageType = "success";
      message = "En verifikasjons epost har blitt sendt til " + emailChange.newEmail;
    } else {
      messageType = "error";
      message = "Noe gikk galt, er du sikker at eposten er riktig?";
    }
  }

  function handleFileSelect(event) {
    selectedFile = event.target.files[0]; // Update the selectedFile variable on file selection
    CProfilePicture = URL.createObjectURL(selectedFile);
  }

  onMount(async () => {
    profilePicture = await getPfp();
    CProfilePicture = profilePicture;
  });
</script>

<Metatags title="Innstillinger" description="Innstillinger for blalange.org" />

<section class="dark:bg-gray-900">
  <div class="flex flex-col px-6 py-8 md:min-h-screen lg:py-0">
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
      <div class="space-y-4">
        <h2 class="text-2xl font-bold mb-4">Konto innstillinger</h2>
        <div class="border-dotted border-2 border-primary-500 rounded-lg p-2">
          <h3 class="text-xl font-bold mb-4">Profilbilde:</h3>
          <img src={CProfilePicture} alt="Profilbilde" class="w-20 h-20 mb-4" />
          <div>
            <label for="CProfilePicture">Last opp ett nytt profilbilde</label>
            <input type="file" id="CProfilePicture" on:change={handleFileSelect} />
          </div>
          <button class="blue-button mt-4" on:click={savePfp}>Lagre profilbilde</button>
        </div>
        <div class="border-dotted border-2 border-primary-500 rounded-lg p-2">
          <h3 class="text-xl font-bold mb-4">Epost:</h3>
          {#if pb.authStore.model.email}
            <p>Din epost er: {pb.authStore.model.email}</p>
          {:else}
            <p>Du har ikke oppgitt en epost.</p>
          {/if}
          <div>
            <label for="newEmail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ny epost</label>
            <input
              bind:value={emailChange.newEmail}
              type="email"
              id="newEmail"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="webmaster@blalange.org"
            />
          </div>
          <button class="blue-button mt-4" on:click={changeEmail}>Bytt epost</button>
        </div>
      </div>
    {/if}
  </div>
</section>
