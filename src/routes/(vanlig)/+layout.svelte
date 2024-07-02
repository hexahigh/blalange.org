<script>
  import Footer from "$lib/components/footer.svelte";
  import Nav from "$lib/components/nav2.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Nav id="nav" />

  <main class="flex-grow dark:bg-ctp-base text-black dark:text-white">
    <slot />
  </main>

  <Footer />
</div>
