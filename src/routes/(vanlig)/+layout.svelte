<script>
  import Footer from "$lib/components/footer.svelte";
  import Nav from "$lib/components/nav2.svelte";
</script>

<Nav />

<main class="dark:bg-ctp-base">
  <slot />
</main>

<Footer />