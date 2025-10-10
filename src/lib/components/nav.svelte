<script>
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";
  import { config, defaultConfig, editKey } from "$lib/js/config.ts";
  import { toRedirect } from "$lib/js/redirect";
  import "iconify-icon";
  import logo from "$lib/img/logo_no-bg.svg";
  import { canRefresh, getDirectusInstance, getImageUrl, isLoggedIn } from "$lib/js/directus";
  import { readMe } from "@directus/sdk";
  import { twMerge } from "tailwind-merge";
  let { class: classString } = $props();

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
  });

  let path = $derived($page.url.pathname);

  const links = [
    { href: "/", label: "Hjem" },
    { href: "/articles", label: "Artikler" },
    { href: "https://shop.blalange.org", label: "Merch", newTab: true },
  ];
</script>

<nav class={twMerge("bg-secondary w-full", classString)}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo Left -->
      <div class="shrink-0 flex items-center">
        <img src={logo} alt="Logo" class="h-14 w-14" />
      </div>
      <!-- Links Center -->
      <div class="flex-1 flex justify-center">
        <div class="flex space-x-4 ibm-plex-sans">
          {#each links as link}
            <a
              href={link.href}
              target={link.newTab ? "_blank" : ""}
              class={"text-secondary-content hover:brightness-75 px-3 py-2 rounded-md text-md font-medium " +
                (path === link.href ? "current-page" : "not-current-page")}>{link.label}</a
            >
          {/each}
        </div>
      </div>
      <!-- User Account Right -->
      <div class="flex items-center">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                src={isLoggedIn() && userStuff.profilePicture
                  ? userStuff.profilePicture
                  : "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='gray'><circle cx='12' cy='8' r='4'/><path d='M4 20c0-4 8-4 8-4s8 0 8 4'/></svg>"}
                alt="User avatar"
              />
            </div>
          </div>
          <ul tabindex="0" class="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {#if isLoggedIn()}
              <li class="menu-title opacity-100" style="--menu-active-fg: inherit; --menu-active-bg: transparent; color: var(--color-base-content);">
                <span class="text-base font-semibold" style="color: inherit;">{userStuff.name}</span>
                <span class="text-sm truncate" style="color: inherit;">{userStuff.email}</span>
              </li>
              <li><a href="/settings">Innstillinger</a></li>
              <li><button onclick={logout}>Logg ut</button></li>
            {:else}
              <li><a href="/settings">Innstillinger</a></li>
              <li><a href="/login">Logg in</a></li>
              <li><a href="/signup">Opprett konto</a></li>
            {/if}
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  @reference "../../app.css";
  .current-page {
    @apply font-bold;
  }
</style>
