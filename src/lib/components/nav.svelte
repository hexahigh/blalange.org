<script>
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";
  import { config, defaultConfig, editKey } from "$lib/js/config.ts";
  import { toRedirect } from "$lib/js/redirect";
  import "iconify-icon";
  import logo from "$lib/img/logo_no-bg.svg";
  import { canRefresh, getDirectusInstance, getImageUrl, isLoggedIn } from "$lib/js/directus";
  import { readMe } from "@directus/sdk";
  /** @type {{ [key: string]: any }} */
  let { ...rest } = $props();

  let logoAlwaysSpins = $state(false);

  let client;

  // Subscribe to the config store
  const unsubscribe = config.subscribe((value) => {
    logoAlwaysSpins = value.logoAlwaysSpins;
  });

  // Remember to unsubscribe when the component is destroyed to avoid memory leaks
  onDestroy(() => {
    unsubscribe();
  });

  let userStuff = $state({
    profilePicture: "",
    name: "",
    email: "",
  });
  let userRecord;

  async function getStuff() {
    if (!client || !canRefresh()) return;

    let userRecordFetchSuccess = false;
    let tries = 0;
    while (!userRecordFetchSuccess && tries <= 5) {
      try {
        userRecord = await client.request(readMe());
        userRecordFetchSuccess = true;
      } catch (e) {
        tries++;
        await new Promise((resolve) => setTimeout(resolve, 200)); // Wait 200ms before trying again
      }
    }

    userStuff = {
      profilePicture: getImageUrl(userRecord.avatar, { width: 256 }),
      name: userRecord.first_name + " " + userRecord.last_name,
      email: userRecord.email,
    };
  }

  async function logout() {
    if (typeof window === "undefined") return;
    await client.logout();
    // Refresh the page
    window.location.reload();
  }

  let collapse;
  let collapseProfile;
  let visibleProfile = false;
  let visible = $state(false);

  onMount(async () => {
    client = getDirectusInstance();
    await getStuff();

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

    const targetElProfile = document.getElementById("user-dropdown");
    const triggerElProfile = document.getElementById("user-menu-button");

    collapseProfile = {
      init: () => {
        if (triggerElProfile.hasAttribute("aria-expanded")) {
          visibleProfile = triggerElProfile.getAttribute("aria-expanded") === "true";
        }
      },
      expand: () => {
        targetElProfile.classList.remove("hidden");
        if (triggerElProfile) {
          triggerElProfile.setAttribute("aria-expanded", "true");
        }
        visibleProfile = true;
      },
      collapse: () => {
        targetElProfile.classList.add("hidden");
        if (triggerElProfile) {
          triggerElProfile.setAttribute("aria-expanded", "false");
        }
        visibleProfile = false;
      },
      toggle: () => {
        if (visibleProfile) {
          collapseProfile.collapse();
        } else {
          collapseProfile.expand();
        }
      },
    };
  });

  let navbarClass = $derived(visible ? "navbar-open" : "");

  function toggleNav() {
    collapse.toggle();
  }

  function toggleNavProfile() {
    collapseProfile.toggle();
  }

  function geti18nItem(code) {
    return defaultConfig.i18n.supportedLanguages.find((l) => l.code === code);
  }

  let path = $derived($page.url.pathname);

    const links = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: toRedirect("https://shop.blalange.org", { noHost: true }), label: 'Merch' },
  ];
</script>

<nav class="bg-b-maastricht w-full">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo Left -->
      <div class="flex-shrink-0 flex items-center">
        <img src={logo} alt="Logo" class="h-14 w-14" />
      </div>
      <!-- Links Center -->
      <div class="flex-1 flex justify-center">
        <div class="flex space-x-4 ibm-plex-sans">
          {#each links as link}
            <a href={link.href} class={"text-white hover:text-gray-300 px-3 py-2 rounded-md text-md font-medium " + (path === link.href ? "current-page" : "not-current-page")}>{link.label}</a>
          {/each}
        </div>
      </div>
      <!-- User Account Right -->
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-red-600"></div>
      </div>
    </div>
  </div>
</nav>

<style lang="postcss">
  .current-page {
    @apply font-bold;
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
    animation: logoSpin 1s linear infinite reverse;
  }

  .hover\:logo-spin:hover {
    animation: logoSpin 1s linear infinite reverse;
  }
</style>
