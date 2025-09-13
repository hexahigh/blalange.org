<script lang="ts">
  import { dev } from "$app/environment";
  import "../app.css";
  import "$lib/css/fonts.css";
  import { onMount } from "svelte";

  import { startAnalyticsMonitoring } from "$lib/js/analytics";
  import { init as initAnalytics2 } from "$lib/js/analytics2";
  import { initialize as initializeDev, checkForDevMode } from "$lib/js/dev";
  import { loadConfig, config } from "$lib/js/config";
  import { initEgg } from "$lib/js/egg.js";
  import { init as initEruda } from "$lib/js/eruda";
  import { addAPIProvider, loadIcons } from "iconify-icon";
  import { refreshToken } from "$lib/js/directus";
  import FingerprintJS from "@fingerprintjs/fingerprintjs";
  import { load as loadBotD } from "@fingerprintjs/botd";
  import { fingerprint as fingerprintStore, botd as botdStore } from "$lib/stores/info";
  import Pre from "$lib/components/util/pre.svelte";
  import "$lib/js/polyfills/main";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();

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
    initEruda();
    // We call refreshToken() at startup, this way directus will automatically refresh the token if needed
    refreshToken();

    config.subscribe((value) => {
    });

    // FingerprintJS and BotD
    FingerprintJS.load().then((fp) => {
      fingerprintStore.set(fp);
      console.log(fp.get());
    });
    loadBotD().then((botd) => {
      botdStore.set(botd);
    });
    // fingerprint.set((await FingerprintJS.load()));
    // botd.set(await loadBotD());

    initEgg(); // Initialize easter egg 1
    if (dev && !import.meta.env.VITE_FORCE_ANALYTICS) {
      console.log("In development mode. No analytics monitoring.");
    } else {
      // startAnalyticsMonitoring();
      initAnalytics2();
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

<Pre
  links={[
    { url: "https://db.blalange.org", type: "preconnect" },
    { url: "https://downloads-global.3cx.com", type: "preconnect" },
    { url: "https://1468.3cx.cloud", type: "preconnect" },
    { url: "https://api.iconify.design", type: "preconnect" },
    { url: "https://api.simplesvg.com", type: "dns-prefetch" },
    { url: "https://api.unisvg.com", type: "dns-prefetch" },
  ]}
/>

{@render children?.()}
