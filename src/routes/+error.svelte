<script>
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import * as m from "$lib/paraglide/messages.js";

  let error = $page.error;
  let status = $page.status;

  console.error(error);

  const statusArray = Array.from(String(status));
  const spanIds = statusArray.map((_, i) => `span-${i}`);

  let errorHeader;
  let errorText;
  try {
    errorHeader = m[`error_header_${status}`]();
    errorText = m[`error_text_${status}`]();
  } catch (e) {
    console.error("[Error page]:", e);
    errorHeader = m.error_notFound_header();
    errorText = m.error_notFound_text();
  }
</script>

<div class="relative w-full min-h-screen flex justify-center flex-col">
  <section class="bg-base-100">
    <div class="py-8 px-4 mx-auto max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
      <div class="mx-auto max-w-(--breakpoint-sm) text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-m-secondary">
          {#each statusArray as s, i}
            <span id={spanIds[i]} in:fly={{ duration: 300, delay: i * 50 }}>
              {s}
            </span>
          {/each}
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text text-base-content md:text-4xl">
          {errorHeader}
        </p>
        <p class="mb-4 text-lg font-light text-base-content/70">
          {errorText}
        </p>
        <a
          href="/"
          class="inline-flex text-m-secondary-text bg-m-secondary hover:bg-m-secondary/80 focus:ring-4 focus:outline-none focus:ring-m-secondary/45 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >{m.error_returnHome()}</a
        >
      </div>
    </div>
  </section>
</div>
