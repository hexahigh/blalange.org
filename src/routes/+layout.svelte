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

  onMount(() => {
    startAnalyticsMonitoring();
  });
</script>

<main>
  <slot />
</main>
