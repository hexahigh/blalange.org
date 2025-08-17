<script lang="ts">
  import { defaultConfig, config, saveConfig, editKey } from "$lib/js/config";
  import Metatags from "$lib/components/metatags.svelte";
  import { Toggle, Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "flowbite-svelte";
  import ThemePreview from "./themePreview.svelte";
  import { page } from "$app/state";
  import { latestVersion, buildDate, commitDate, commitHash } from "$lib/js/version";

  import hljs from "highlight.js/lib/core";
  import hljsJson from "highlight.js/lib/languages/json";
  import "highlight.js/styles/obsidian.css";
  import type { version } from "os";

  hljs.registerLanguage("json", hljsJson);

  const sidebarUi = uiHelpers();

  let message;
  let messageType = "info";

  let fontChange = $state({
    selectElement: null,
  });

  async function saveFont() {
    const font = fontChange.selectElement.options[fontChange.selectElement.selectedIndex].value;
    editKey("font.family", font);
  }

  let isOpen = $state(false);
  let activeUrl = $state(page.url.pathname);
  let activeTab = $state(page.url.searchParams.get("tab") || "look");

  $effect(() => {
    isOpen = sidebarUi.isOpen;
    activeUrl = page.url.pathname;
    activeTab = page.url.searchParams.get("tab") || "look";
  });

  let highlightedConfig = $state("");

  config.subscribe((value) => {
    highlightedConfig = hljs.highlight(JSON.stringify(value, null, 2), { language: "json" }).value;
  });

  const themes = [
    "light",
    "dark",
    "nord",
    "lofi",
    "cupcake",
    "valentine",
  ];
</script>

<Metatags title="Innstillinger" description="Innstillinger for blalange.org" />

<div class="flex flex-col flex-1 min-h-screen mt-4">
  <SidebarButton onclick={sidebarUi.toggle} class="mb-2" />
  <div class="relative grow mb-8">
    <Sidebar
      {activeUrl}
      backdrop={false}
      {isOpen}
      closeSidebar={sidebarUi.close}
      params={{ x: -50, duration: 50 }}
      classes={{
        div: "bg-base-200 dark:bg-base-200",
        nonactive: "flex items-center p-2 font-normal text-base bg-base-200 hover:bg-base-300 dark:text-base dark:bg-base-200 dark:hover:bg-base-300",
        active: "flex items-center p-2 font-bold text-primary-content bg-primary/70 hover:bg-primary dark:text-primary-content dark:bg-primary/70 dark:hover:bg-primary ",
      }}
      class="z-50 h-full rounded-xl overflow-auto bg-base-200 dark:bg-base-200"
      position="absolute"
    >
      <SidebarGroup>
        <SidebarItem label="Utseende" href="?tab=look" active={activeTab === "look"}>
          {#snippet icon()}
            <span class="icon-[nrk--404] h-6 w-6"></span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Utvikler" href="?tab=dev" active={activeTab === "dev"}>
          {#snippet icon()}
            <span class="icon-[mdi--terminal-line] h-6 w-6"></span>
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="flex justify-center items-center w-full">
      <div class="overflow-auto px-4 md:ml-64 text-center">
        <h1 class="text-3xl font-bold mb-4 text-center">Innstillinger</h1>
        {#if activeTab === "look"}
          <h2 class="text-2xl font-semibold mb-4">Utseende</h2>
          <div class="mb-4">
            <h3 class="text-xl font-semibold mb-2">Temaer</h3>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {#each themes as theme}
                <ThemePreview {theme} class="theme-preview" />
              {/each}
            </div>
          </div>
        {:else if activeTab === "dev"}
          <h2 class="text-2xl font-semibold mb-4">Utvikler</h2>
          <div class="flex flex-col md:flex-row space-x-4">
            <fieldset class="fieldset bg-base-100 border-base-300 rounded-box border p-4">
              <legend class="fieldset-legend">Config</legend>
              <code class="text-left whitespace-break-spaces">{@html highlightedConfig}</code>
            </fieldset>
            <fieldset class="fieldset bg-base-100 border-base-300 rounded-box border p-4">
              <legend class="fieldset-legend">Versjon info</legend>
              <code class="text-left whitespace-break-spaces"
                >{@html hljs.highlight(JSON.stringify({ latestVersion, buildDate, commitDate, commitHash }, null, 2), {
                  language: "json",
                }).value}</code
              >
            </fieldset>
          </div>
        {:else}
          <p>Velg en kategori fra menyen til venstre.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
