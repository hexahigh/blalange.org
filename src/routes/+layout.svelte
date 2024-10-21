<script lang="ts">
  import { dev } from "$app/environment";
  import "../app.css";
  import "$lib/css/fonts.css";
  import { onMount, onDestroy } from "svelte";

  import { startAnalyticsMonitoring } from "$lib/js/analytics";
  import { initialize as initializeDev, checkForDevMode } from "$lib/js/dev";
  import { loadConfig, config, editKey } from "$lib/js/config";
  import { initEgg } from "$lib/js/egg.js";
  import { addAPIProvider, loadIcons } from "iconify-icon";
  import { currentUser } from "$lib/js/directus";

  import "$lib/js/polyfills/main";

  import { locale, setLocale } from "$lib/js/translations/main";
  import { get } from "svelte/store";

  addAPIProvider("", {
    resources: ["https://api.iconify.design", "https://api.simplesvg.com", "https://api.unisvg.com"],
  });

  loadIcons([
    "line-md:sunny-filled-loop", // Navbar
    "line-md:moon-filled-loop", // Navbar
  ]);

  onMount(async () => {
    loadConfig(); // Load the config from local storage
    initializeDev(); // Initialize the dev mode
    checkForDevMode(); // Checks if dev mode is enabled in the config
    // We call currentUser() at startup, this way directus will automatically refresh the token if needed
    currentUser();

    config.subscribe((value) => {
      document.documentElement.style.setProperty("--font-family-var", value.font.family);

      // if (value.translations.currentLocale) setLocale(value.translations.currentLocale);

    });

    locale.subscribe((value) => {
      if (value !== get(config).translations.currentLocale) {
        editKey("translations.currentLanguage", value);
      }
    })

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
