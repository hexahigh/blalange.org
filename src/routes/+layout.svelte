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

  import { startAnalyticsMonitoring } from "$lib/js/analytics";
  import { initialize, checkForDevMode } from "$lib/js/dev.js";
  import { loadConfig, config } from "$lib/js/config.ts";
  import { initEgg } from "$lib/js/egg.js";
  import { addAPIProvider } from "iconify-icon";

  let crtMode = false;

  // Subscribe to the config store
  const unsubscribe = config.subscribe((value) => {
    crtMode = value.crtMode;
  });

  // Remember to unsubscribe when the component is destroyed to avoid memory leaks
  onDestroy(() => {
    unsubscribe();
  });

  addAPIProvider("", {
      resources: [
        "https://api.iconify.design",
        "https://api.simplesvg.com",
        "https://api.unisvg.com",
      ],
    });

  onMount(() => {
    if ("serviceWorker" in navigator && !dev) {
        navigator.serviceWorker.register("/service-worker.js").then((registration) => {
            console.log("SW registered: ", registration);
        }).catch((error) => {
            console.log("SW registration failed: ", error);
        })
    }
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

<main class:crt={crtMode}>
  <slot />
</main>
