<script>
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import * as m from '$lib/paraglide/messages.js'

  let domain = $page.url.host;
  let protocol = $page.url.protocol;

  let status = $page.status;

  const statusArray = Array.from(String(status));
  const spanIds = statusArray.map((_, i) => `span-${i}`);
</script>

<div class="relative w-full h-screen flex justify-center flex-col">
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {#each statusArray as s, i}
              <span id={spanIds[i]} in:fly={{ duration: 300, delay: i * 50 }}>
                {s}
              </span>
            {/each}
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          {m[`error_header_${status}`]()}
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {m[`error_text_${status}`]() || m.error_notFound_text()}
        </p>
        <a
          href="/"
          class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >{m.error_returnHome()}</a
        >
      </div>
    </div>
  </section>
</div>
