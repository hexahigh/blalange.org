<script>
  import { onMount } from "svelte";
  import { DarkMode } from "flowbite-svelte";
  import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
  import logo from "$lib/img/favicon.svg";
  import { page } from "$app/stores";
  import autoAnimate from "@formkit/auto-animate";
  import * as confetti from "$lib/js/confetti.js";
  import { config } from "$lib/js/config.js";

  let path;
  let collapse;
  let visible = false;

  onMount(() => {
    const targetEl = document.getElementById("navbar-default");
    const triggerEl = document.getElementById("hamburger");

    collapse = {
      init: () => {
        if (triggerEl.hasAttribute("aria-expanded")) {
          visible = triggerEl.getAttribute("aria-expanded") === "true";
        }
      },
      expand: () => {
        targetEl.classList.remove("hidden");
        if (triggerEl) {
          triggerEl.setAttribute("aria-expanded", "true");
        }
        visible = true;
      },
      collapse: () => {
        targetEl.classList.add("hidden");
        if (triggerEl) {
          triggerEl.setAttribute("aria-expanded", "false");
        }
        visible = false;
      },
      toggle: () => {
        if (visible) {
          collapse.collapse();
        } else {
          collapse.expand();
        }
      },
    };
  });

  $: navbarClass = visible ? "navbar-open" : "";

  function toggleNav() {
    collapse.toggle();
  }

  $: path = $page.url.pathname;
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900" use:autoAnimate>
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        src={logo}
        class="h-12 hover:logo-spin"
        class:logo-spin={config.logoAlwaysSpins}
        on:click={confetti.fireAll}
        alt="Blånange Logo"
      />
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap krona dark:text-white"
        >Blålange</span
      >
    </a>
    <button
      on:click={toggleNav}
      id="hamburger"
      data-collapse-toggle="navbar-default"
      type="button"
      class:navbar-open={visible}
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li class={path === "/" ? "current-page" : "not-current-page"}>
          <a href="/">Hjem</a>
        </li>
        <li
          class={path.includes("/images") ? "current-page" : "not-current-page"}
        >
          <a href="/images">Bilder</a>
        </li>
        <li
          class={path.includes("/articles")
            ? "current-page"
            : "not-current-page"}
        >
          <a href="/articles">Artikler</a>
        </li>
        <li class="not-current-page">
          <a href="https://shop.blalange.org">Merch</a>
        </li>
        <li>
          <DarkMode class="text-lg">
            <SunSolid slot="lightIcon" color="yellow" />
            <MoonSolid slot="darkIcon" color="blue" />
          </DarkMode>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="postcss">
  .current-page {
    @apply block py-2 px-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white md:dark:text-ctp-blue;
  }

  .not-current-page {
    @apply block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-ctp-blue dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent;
  }

  #hamburger {
    @apply transition-transform duration-500 ease-in-out;
  }

  .navbar-open {
    @apply rotate-90;
  }

  @keyframes logoSpin {
    to {
      transform: rotate(360deg);
    }
  }
  .logo-spin {
    animation: spin 1s linear infinite reverse;
  }

  .hover\:logo-spin:hover {
    animation: logoSpin 1s linear infinite reverse;
  }
</style>
