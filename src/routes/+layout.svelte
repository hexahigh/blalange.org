<script>
  import "../app.css";
  import "$lib/css/style2.css";
  import { onMount } from "svelte";
  import { startAnalyticsMonitoring } from "$lib/js/analytics.js"; // Adjust the path as necessary
  import "@fontsource/krona-one";
  import "@fontsource/lexend-exa";
  import "@fontsource/dela-gothic-one";
  import "@fontsource/roboto-condensed";
  import '@fontsource/material-icons';

  import { pwaInfo } from 'virtual:pwa-info'; 

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        }
      })
    }
  })

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 

  onMount(() => {
    startAnalyticsMonitoring();
  });
</script>

<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>

<main>
  <slot />
</main>
