<script>
  import { onMount, onDestroy } from "svelte";
  import { Dropdown, DropdownItem, DropdownHeader, Avatar } from "flowbite-svelte";
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
  });

  function geti18nItem(code) {
    return defaultConfig.i18n.supportedLanguages.find((l) => l.code === code);
  }

  let path = $derived($page.url.pathname);

  const links = [
    { href: "/", label: "Hjem" },
    { href: "/articles", label: "Artikler" },
    { href: toRedirect("https://shop.blalange.org", { noHost: true }), label: "Merch" },
  ];
</script>

<nav class="bg-m-primary w-full">
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
              class={"text-m-primary-text hover:brightness-75 px-3 py-2 rounded-md text-md font-medium " +
                (path === link.href ? "current-page" : "not-current-page")}>{link.label}</a
            >
          {/each}
        </div>
      </div>
      <!-- User Account Right -->
      <div class="flex items-center">
        <Avatar id="acs" />
        <Dropdown triggeredBy="#acs">
          {#if isLoggedIn()}
            <DropdownHeader>
              <span class="block text-sm text-gray-900 dark:text-white">{userStuff.name}</span>
              <span class="block truncate text-sm font-medium">{userStuff.email}</span>
            </DropdownHeader>
            <DropdownItem href="/settings">Innstillinger</DropdownItem>
            <DropdownItem on:click={logout}>Logg ut</DropdownItem>
          {:else}
            <DropdownItem href="/settings">Innstillinger</DropdownItem>
            <DropdownItem href="/login">Logg in</DropdownItem>
            <DropdownItem href="/register">Opprett konto</DropdownItem>
          {/if}
        </Dropdown>
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
