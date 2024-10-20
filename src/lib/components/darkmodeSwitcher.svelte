<!--
  @component
  Originally a component from flowbite-svelte

  Note that slotnames are a bit misleading, lighticon is displayed when darkmode is enabled and darkicon is displayed when darkmode is disabled
-->

<script lang="ts">
  export let ariaLabel: string = "Dark mode";
  let clazz: string = "";
  export { clazz as class };

  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const isDark = target.ownerDocument.documentElement.classList.toggle("dark");
    if (target.ownerDocument === document)
      // we are NOT in the iFrame
      localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };

  import { onMount } from "svelte";
  import { isDarkmode } from "$lib/stores/theme";

  const updateTheme = () => {
    isDarkmode.set(document.documentElement.classList.contains("dark"));
  };

  onMount(() => {
    isDarkmode.subscribe((value) => {
        if (value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("color-theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("color-theme", "light");
        }
    })

    updateTheme();

    // Make a mutation observer to watch for class changes on ownerDocument.documentElement
    // and update the theme accordingly
    const darkModeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateTheme();
        }
      });
    });
    // Observe changes to the class attribute of the ownerDocument.documentElement
    darkModeObserver.observe(document.documentElement, {
      attributes: true,
    });
  });
</script>

<svelte:head>
  <script>
    if ("color-theme" in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem("color-theme") === "dark"
        ? window.document.documentElement.classList.add("dark")
        : window.document.documentElement.classList.remove("dark");
    } else {
      // browser preference - does not overrides
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        window.document.documentElement.classList.add("dark");
    }
  </script>
</svelte:head>

<button on:click={toggleTheme} aria-label={ariaLabel} type="button" {...$$restProps} class={clazz}>
  <span class="hidden dark:block">
    <slot name="lightIcon">
      <p>Light</p>
    </slot>
  </span>
  <span class="block dark:hidden">
    <slot name="darkIcon">
      <p>Dark</p>
    </slot>
  </span>
</button>
