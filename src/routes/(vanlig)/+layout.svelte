<script>
  import { initializeTheme } from "$lib/stores/theme";
  import ThemeSetter from "$lib/components/util/themeSetter.svelte";
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
    initializeTheme("light", "dark");
  });
</script>

<ThemeSetter
  defaultTheme="light"
  defaultDarkTheme="dark"
/>

<div class="flex flex-col min-h-screen">
  <Nav id="nav" />

  <main class="flex-grow bg-m-base text-m-base-text">
    {@render children?.()}
  </main>
  <!-- <Support /> -->
  <Footer />
</div>
