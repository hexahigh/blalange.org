<script>
  import "../../app.css";
  import { onMount } from "svelte";
  import { startAnalyticsMonitoring } from "$lib/js/analytics.js"; // Adjust the path as necessary
  import "@fontsource/krona-one";
  import "@fontsource/lexend-exa";
  import "@fontsource/dela-gothic-one";
  import "@fontsource/roboto-condensed";
  import '@fontsource/material-icons';
  import Footer from "$lib/components/footer.svelte";
  import Nav from "$lib/components/nav2.svelte";

  import { pwaInfo } from 'virtual:pwa-info'; 

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 

  onMount(() => {
    startAnalyticsMonitoring();
  });
</script>

<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>

<Nav />

<main>
  <slot />
</main>

<Footer />

{#await import('$lib/components/reloadPrompt.svelte') then { default: ReloadPrompt}}
  <ReloadPrompt />
{/await}