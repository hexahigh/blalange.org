<script>
  import "../app.css";
  import "$lib/css/font.css";
  import "$lib/css/style2.css";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<main>
  <slot />
</main>
