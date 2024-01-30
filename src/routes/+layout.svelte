<script>
  import "../app.css";
  import "$lib/css/font.css";
  import "$lib/css/style2.css";
  import autoAnimate from "@formkit/auto-animate";
  import { page } from "$app/stores";
  const { route } = $page;
</script>

<main>
  <slot />
</main>
