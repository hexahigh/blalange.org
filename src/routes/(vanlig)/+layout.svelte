<script>
  import Footer from "$lib/components/footer.svelte";
  import Nav from "$lib/components/nav2.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Nav />

  <main class="flex-grow dark:bg-ctp-base">
    <slot />
  </main>

  <Footer />
</div>
