<script lang="ts">
  import "@fontsource/krona-one";
  import "@fontsource/lexend-exa";
  import "@fontsource/dela-gothic-one";
  import "@fontsource/roboto-condensed";
  import "@fontsource-variable/inter";

  import { dev } from "$app/environment";
  import "../app.css";
  import "$lib/css/fonts.css";
  import { onMount, onDestroy } from "svelte";

  import { startAnalyticsMonitoring } from "$lib/js/analytics";
  import { initialize as initializeDev, checkForDevMode } from "$lib/js/dev";
  import { loadConfig, config } from "$lib/js/config";
  import { initEgg } from "$lib/js/egg.js";
  import { addAPIProvider, loadIcons } from "iconify-icon";

  import "$lib/js/polyfills/main"

  addAPIProvider("", {
    resources: [
      "https://api.iconify.design",
      "https://api.simplesvg.com",
      "https://api.unisvg.com",
    ],
  });

  loadIcons(
     [
      "line-md:sunny-filled-loop", // Navbar
      "line-md:moon-filled-loop", // Navbar
     ]
  );

  onMount(() => {
    initializeDev(); // Initialize the dev mode
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
  {#if !dev}
    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((error) => {
            console.log("SW registration failed: ", error);
          });
      }
    </script>
  {/if}
</svelte:head>

<main>
  <slot />
</main>
