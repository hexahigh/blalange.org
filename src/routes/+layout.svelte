<script>
  import "../app.css";
  import "$lib/css/font.css";
  import "$lib/css/style2.css";
  import autoAnimate from "@formkit/auto-animate";
  import { page } from "$app/stores";
  const { route } = $page;
</script>

{#if route.id.includes("/webring")}
  <main use:autoAnimate>
    <slot />
  </main>
{:else}
  <main use:autoAnimate class="text-text bg-base min-h-screen">
    <slot />
  </main>
{/if}
