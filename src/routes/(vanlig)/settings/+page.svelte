<script lang="ts">
  import PocketBase from "pocketbase";
  import { defaultConfig, config, saveConfig, editKey } from "$lib/js/config";
  import Metatags from "$lib/components/metatags.svelte";
  import { onMount } from "svelte";
  import { Toggle } from "flowbite-svelte";
  import ThemePreview from "./themePreview.svelte";

  let message;
  let messageType = "info";

  let fontChange = $state({
    selectElement: null,
  });

  async function saveFont() {
    const font = fontChange.selectElement.options[fontChange.selectElement.selectedIndex].value;
    editKey("font.family", font);
  }
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
    <div class="space-y-4 mt-8">
      <h2 class="text-2xl font-bold mb-4">Utseende</h2>
      <div class="border-dotted border-2 border-primary-500 rounded-lg p-2">
        <h3 class="text-xl font-bold mb-4">Font:</h3>
        <label for="font-select">Velg en font</label>
        <select
          bind:this={fontChange.selectElement}
          value={$config.font.family}
          id="font-select"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Inter Variable">Inter</option>
          <option value="Krona One">Krona One</option>
          <option value="PxPlus IBM BIOS">PxPlus IBM BIOS</option>
          <option value="RimWordFont">RimWord</option>
        </select>
        <button class="blue-button mt-4" onclick={saveFont}>Lagre font</button>
      </div> 
      <div class="border-dotted border-2 border-primary-500 rounded-lg p-2">
        <h3 class="text-xl font-bold mb-4">Tema:</h3>
        <div class="rounded-box grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <ThemePreview theme="light" />
          <ThemePreview theme="dark" />
          <ThemePreview theme="mocha" />
          <ThemePreview theme="latte" />
        </div>
      </div> 
      <h2 class="text-2xl font-bold mb-4">Misc</h2>
      <div class="border-dotted border-2 border-primary-500 rounded-lg p-2">
        <Toggle id="eruda-toggle" color="blue" size="large" bind:checked={$config.erudaEnabled} on:change={saveConfig}>Eruda</Toggle>
      </div>
    </div>
  </div>
</section>