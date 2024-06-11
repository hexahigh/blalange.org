<script>
  import "@fontsource/krona-one";
  import "@fontsource/lexend-exa";
  import "@fontsource/dela-gothic-one";
  import "@fontsource/roboto-condensed";
  import "@fontsource/material-icons";
  import '@fontsource-variable/material-symbols-outlined';

  import { dev } from "$app/environment";
  import "../app.css";
  import "$lib/css/fonts.css";
  import { onMount, onDestroy } from "svelte";

  import { startAnalyticsMonitoring } from "$lib/js/analytics";
  import { initialize, checkForDevMode } from "$lib/js/dev.js";
  import { loadConfig, config } from "$lib/js/config.ts";
  import { initEgg } from "$lib/js/egg.js";
  import { addAPIProvider } from "@iconify/svelte";

  import { pwaInfo } from "virtual:pwa-info";

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "";

  let crtMode = false;

  // Subscribe to the config store
  const unsubscribe = config.subscribe((value) => {
    crtMode = value.crtMode;
  });

  // Remember to unsubscribe when the component is destroyed to avoid memory leaks
  onDestroy(() => {
    unsubscribe();
  });

  onMount(() => {
    addAPIProvider("", {
      resources: ["https://api.iconify.design"],
    });
    initialize(); // Initialize the dev mode
    loadConfig(); // Load the config from local storage
    checkForDevMode(); // Checks if dev mode is enabled in the config
    initEgg(); // Initialize easter egg 1
    if (dev) {
      console.log("In development mode. No analytics monitoring.");
    } else {
      startAnalyticsMonitoring();
    }
  });
</script>

<svelte:head>
  {@html webManifestLink}
</svelte:head>

<main class:crt={crtMode}>
  <slot />
</main>

{#await import("$lib/components/reloadPrompt.svelte") then { default: ReloadPrompt }}
  <ReloadPrompt />
{/await}
