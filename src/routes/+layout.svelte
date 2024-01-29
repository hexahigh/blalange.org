<script>
  import "../app.css";
  import "$lib/css/font.css";
  import "$lib/css/style2.css";
  import { page } from "$app/stores";
  const { route } = $page;
</script>

{#if route.id.includes("/webring")}
  <slot />
{:else}
  <main class="text-text bg-base min-h-screen">
    <slot />
  </main>
{/if}
