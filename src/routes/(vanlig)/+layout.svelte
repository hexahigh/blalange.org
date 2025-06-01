<script>
  import { initializeTheme } from "$root/src/lib/stores/theme";
  import { onMount } from 'svelte';
  import Footer from "$lib/components/footer.svelte";
  import Nav from "$lib/components/nav.svelte";
  import Support from "$lib/components/3cxWidget.svelte";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

  onMount(() => {
    initializeTheme();
  });
</script>

<div class="flex flex-col min-h-screen">
  <Nav id="nav" />

  <main class="flex-grow dark:bg-gray-900 text-black dark:text-white">
    {@render children?.()}
  </main>
  <!-- <Support /> -->
  <Footer />
</div>
