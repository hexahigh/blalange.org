<script>
  import "../app.css";
  import "$lib/css/font.css";
  import "$lib/css/style2.css";
  import { onMount } from 'svelte';
  import { startAnalyticsMonitoring } from '$lib/js/analytics.js'; // Adjust the path as necessary
 
  onMount(() => {
     startAnalyticsMonitoring();
  });
 </script>
 
 <main>
  <slot />
 </main>