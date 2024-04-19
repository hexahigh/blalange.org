<script>
  import "@fontsource/krona-one";
  import "@fontsource/lexend-exa";
  import "@fontsource/dela-gothic-one";
  import "@fontsource/roboto-condensed";
  import "@fontsource/material-icons";

  import { dev } from "$app/environment";
  import "../app.css";
  import "$lib/css/fonts.css";
  import { onMount, onDestroy } from "svelte";

  import { startAnalyticsMonitoring } from "$lib/js/analytics.js";
  import { initialize, checkForDevMode } from "$lib/js/dev.js";
  import { loadConfig, config } from "$lib/js/config.js";
  import { initEgg } from "$lib/js/egg.js";

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
