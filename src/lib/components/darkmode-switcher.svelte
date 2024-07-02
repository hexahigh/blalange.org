<!--
  @component
  Originally a component from flowbite-svelte
-->

<script lang="ts">
  export let ariaLabel: string = "Dark mode";
  let clazz: string = "";
  export { clazz as class }

  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const isDark =
      target.ownerDocument.documentElement.classList.toggle("dark");
    if (target.ownerDocument === document)
      // we are NOT in the iFrame
      localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };
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

<button
  on:click={toggleTheme}
  aria-label={ariaLabel}
  type="button"
  {...$$restProps}
  class={clazz}
>
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
