<script lang="ts">
  import { defaultConfig, config, saveConfig, editKey } from "$lib/js/config";
  import Metatags from "$lib/components/metatags.svelte";
  import ThemePreview from "./themePreview.svelte";
  import { page } from "$app/state";
  import { latestVersion, buildDate, commitDate, commitHash } from "$lib/js/version";
  import hljs from "highlight.js/lib/core";
  import hljsJson from "highlight.js/lib/languages/json";
  import "highlight.js/styles/nord.css";
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import { canRefresh, getDirectusInstance, getImageUrl } from "$lib/js/directus";
  import { readMe, updateMe, uploadFiles, updateUser } from "@directus/sdk";
  import type { DirectusClient, AuthenticationClient, RestClient } from "@directus/sdk";

  hljs.registerLanguage("json", hljsJson);

  let activeTab = $state(page.url.searchParams.get("tab") || "look");

  $effect(() => {
    activeTab = page.url.searchParams.get("tab") || "look";
  });

  let highlightedConfig = $state("");

  config.subscribe((value) => {
    highlightedConfig = hljs.highlight(JSON.stringify(value, null, 2), { language: "json" }).value;
  });

  const themes = ["light", "dark", "nord", "lofi", "cupcake", "valentine"];

  let directus: DirectusClient<any> & AuthenticationClient<any> & RestClient<any>;
  let userRecord = $state<any>(null);

  async function getUser() {
    if (!directus || !canRefresh) return;

    let userRecordFetchSuccess = false;
    let tries = 0;
    while (!userRecordFetchSuccess && tries <= 3) {
      try {
        userRecord = await directus.request(readMe());
        userRecordFetchSuccess = true;
      } catch (e) {
        tries++;
        await new Promise((resolve) => setTimeout(resolve, 200)); // Wait 200ms before trying again
      }
    }
  }

  // Account form state
  let accountForm = $state({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
    location: "",
    title: "",
    avatar: null as File | null,
  });

  let avatarPreview = $state("");
  let showPasswordFields = $state(false);
  let isSaving = $state(false);

  // Handle avatar upload
  function handleAvatarChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      accountForm.avatar = file;

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        avatarPreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Save account changes
  async function saveAccount() {
    isSaving = true;

    // Validate passwords if changing
    if (showPasswordFields) {
      if (accountForm.newPassword !== accountForm.confirmPassword) {
        alert("Nye passord matcher ikke");
        isSaving = false;
        return;
      }
      if (accountForm.newPassword.length < 8) {
        alert("Nytt passord må være minst 8 tegn");
        isSaving = false;
        return;
      }
    }

    try {
      if (!directus) {
        throw new Error("Ikke tilkoblet");
      }

      let avatarId = userRecord?.avatar;

      // Upload new avatar if one was selected
      if (accountForm.avatar) {
        try {
          const formData = new FormData();
          formData.append("file", accountForm.avatar);

          const uploadResult = await directus.request(uploadFiles(formData));
          if (uploadResult && uploadResult.id) {
            avatarId = uploadResult.id;
          }
        } catch (uploadError) {
          console.error("Feil ved opplasting av profilbilde:", uploadError);
          // Continue with saving other data even if avatar upload fails
        }
      }

      // Prepare update data
      const updateData: any = {
        first_name: accountForm.firstName,
        last_name: accountForm.lastName,
        email: accountForm.email,
        location: accountForm.location,
        title: accountForm.title,
      };

      // Add avatar if we have one
      if (avatarId) {
        updateData.avatar = avatarId;
      }

      // Add password if changing
      if (showPasswordFields && accountForm.newPassword) {
        updateData.password = accountForm.newPassword;
      }

      // Update user information
      const updatedUser = await directus.request(updateUser(userRecord.id, updateData));

      // Update local userRecord with the new data
      userRecord = updatedUser;

      // Update avatar preview if we uploaded a new one
      if (avatarId && avatarId !== userRecord?.avatar) {
        avatarPreview = getImageUrl(avatarId, { width: 256 }) || "";
      }

      // Reset password fields
      if (showPasswordFields) {
        accountForm.newPassword = "";
        accountForm.confirmPassword = "";
        showPasswordFields = false;
      }

      // Reset avatar file input
      accountForm.avatar = null;

      alert("Kontoinformasjon lagret!");
    } catch (error) {
      console.error("Feil ved lagring:", error);

      // More specific error messages
      let errorMessage = "Feil ved lagring av kontoinformasjon";
      if (error.message?.includes("RECORD_NOT_UNIQUE")) {
        errorMessage = "E-postadressen er allerede i bruk";
      } else if (error.message?.includes("INVALID_CREDENTIALS")) {
        errorMessage = "Feil passord";
      } else if (error.message?.includes("INVALID_PAYLOAD")) {
        errorMessage = "Ugyldig data. Sjekk at alle felt er fylt ut riktig.";
      }

      alert(errorMessage);
    } finally {
      isSaving = false;
    }
  }

  onMount(async () => {
    directus = getDirectusInstance();
    await getUser();

    // Pre-fill account form with user data
    if (userRecord) {
      accountForm.firstName = userRecord.first_name || "";
      accountForm.lastName = userRecord.last_name || "";
      accountForm.email = userRecord.email || "";
      accountForm.location = userRecord.location || "";
      accountForm.title = userRecord.title || "";
      avatarPreview = getImageUrl(userRecord.avatar, { width: 256 }) || "";
    }
  });
</script>

<Metatags title="Innstillinger" description="Innstillinger for blalange.org" />

<div class="container mx-auto max-w-6xl p-4">
  <!-- Hero Section -->
  <div class="hero bg-gradient-to-r from-primary to-accent text-primary-content rounded-box mb-8">
    <div class="hero-content text-center py-8">
      <div class="max-w-md">
        <h1 class="text-4xl font-bold">Innstillinger</h1>
        <p class="py-4">Tilpass nettsiden slik du vil ha den</p>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs tabs-boxed mb-6 justify-center">
    <a href="?tab=look" class="tab {activeTab === 'look' ? 'tab-active' : ''}" class:tab-active={activeTab === "look"}>
      <span class="icon-[mdi--palette] mr-2 h-5 w-5"></span>
      Utseende
    </a>
    <a href="?tab=dev" class="tab {activeTab === 'dev' ? 'tab-active' : ''}" class:tab-active={activeTab === "dev"}>
      <span class="icon-[mdi--terminal-line] mr-2 h-5 w-5"></span>
      Utvikler
    </a>
    <a
      href="?tab=account"
      class="tab {activeTab === 'account' ? 'tab-active' : ''}"
      class:tab-active={activeTab === "account"}
    >
      <span class="icon-[mdi--account] mr-2 h-5 w-5"></span>
      Konto
    </a>
  </div>

  <!-- Content -->
  {#if activeTab === "look"}
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl mb-6">
          <span class="icon-[mdi--palette] mr-2 h-6 w-6"></span>
          Utseende
        </h2>

        <div class="divider">Temaer</div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {#each themes as theme}
            <div class="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:shadow-lg">
              <div class="card-body p-4">
                <ThemePreview {theme} class="w-full" />
              </div>
            </div>
          {/each}
        </div>

        <div class="alert alert-info mt-6">
          <span class="icon-[mdi--info-circle] h-5 w-5"></span>
          <span>Temaet ditt lagres automatisk og gjelder for hele nettstedet.</span>
        </div>
      </div>
    </div>
  {:else if activeTab === "dev"}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Config Card -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-xl mb-4">
            <span class="icon-[mdi--cog] mr-2 h-5 w-5"></span>
            Konfigurasjon
          </h2>
          <div class="mockup-code bg-base-200 text-sm overflow-auto max-h-96">
            <pre><code class="whitespace-pre-wrap">{@html highlightedConfig}</code></pre>
          </div>
          <div class="card-actions justify-end mt-4">
            <button class="btn btn-warning btn-sm" onclick={() => config.set(defaultConfig)}>
              <span class="icon-[mdi--restore] mr-1 h-4 w-4"></span>
              Tilbakestill
            </button>
          </div>
        </div>
      </div>

      <!-- Version Info Card -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-xl mb-4">
            <span class="icon-[mdi--information] mr-2 h-5 w-5"></span>
            Versjonsinformasjon
          </h2>
          <div class="mockup-code bg-base-200 text-sm overflow-auto max-h-96">
            <pre><code class="whitespace-pre-wrap"
                >{@html hljs.highlight(JSON.stringify({ latestVersion, buildDate, commitDate, commitHash }, null, 2), {
                  language: "json",
                }).value}</code
              ></pre>
          </div>
          <div class="stats stats-vertical lg:stats-horizontal mt-4">
            <div class="stat">
              <div class="stat-title">Versjon</div>
              <div class="stat-value text-lg">{latestVersion.id}</div>
            </div>
            <div class="stat">
              <div class="stat-title">Commit</div>
              <div class="stat-value text-lg font-mono">{commitHash?.slice(0, 7)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Developer Tools -->
    <div class="card bg-base-100 shadow-xl mt-6">
      <div class="card-body">
        <h2 class="card-title text-xl mb-4">
          <span class="icon-[mdi--wrench] mr-2 h-5 w-5"></span>
          Utviklerverktøy
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button class="btn btn-outline" onclick={() => editKey("devMode", !get(config).devMode)}>
            <span class="icon-[mdi--bug] mr-2 h-4 w-4"></span>
            Debug modus
          </button>
          <button class="btn btn-outline">
            <span class="icon-[mdi--console] mr-2 h-4 w-4"></span>
            Konsoll
          </button>
        </div>
      </div>
    </div>
  {:else if activeTab === "account"}
    {#if !userRecord}
      <div class="hero bg-base-200 rounded-box">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <span class="icon-[mdi--account-alert] h-16 w-16 mx-auto mb-4 text-warning"></span>
            <h2 class="text-2xl font-bold">Du er ikke logget inn</h2>
            <p class="py-4">Du må være logget inn for å kunne endre kontoen din</p>
            <p class="text-[0.25rem]">
              Jeg håper virkelig det var åpenbart, hvordan skal nettsiden vite hvilken konto du vil endre om du ikke er
              logget inn? Og selv om nettsiden visste det så må du fremdeles logge inn for å bevise at du er brukeren du
              prøver å endre
            </p>
          </div>
        </div>
      </div>
    {:else if userRecord}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Profile Picture Card -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-xl mb-4">
              <span class="icon-[mdi--account-circle] mr-2 h-5 w-5"></span>
              Profilbilde
            </h2>

            <div class="flex flex-col items-center space-y-4">
              <div class="avatar">
                <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {#if avatarPreview}
                    <img src={avatarPreview} alt="Avatar preview" />
                  {:else}
                    <div
                      class="bg-neutral-focus text-neutral-content rounded-full w-32 h-32 flex items-center justify-center"
                    >
                      <span class="icon-[mdi--account] h-16 w-16"></span>
                    </div>
                  {/if}
                </div>
              </div>

              <input
                type="file"
                accept="image/*"
                class="file-input file-input-bordered file-input-primary w-full max-w-xs"
                onchange={handleAvatarChange}
              />

              <div class="text-sm text-base-content/70 text-center">
                Støttede formater: JPG, PNG, GIF<br />
                Maks størrelse: 5MB
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Information Card -->
        <div class="card bg-base-100 shadow-xl lg:col-span-2">
          <div class="card-body">
            <h2 class="card-title text-xl mb-4">
              <span class="icon-[mdi--account-edit] mr-2 h-5 w-5"></span>
              Personlig informasjon
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label" for="firstName">
                  <span class="label-text">Fornavn</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Ola"
                  class="input input-bordered"
                  bind:value={accountForm.firstName}
                />
              </div>

              <div class="form-control">
                <label class="label" for="lastName">
                  <span class="label-text">Etternavn</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Nordmann"
                  class="input input-bordered"
                  bind:value={accountForm.lastName}
                />
              </div>

              <div class="form-control md:col-span-2">
                <label class="label" for="email">
                  <span class="label-text">E-postadresse</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ola.nordmann@example.com"
                  class="input input-bordered"
                  bind:value={accountForm.email}
                />
              </div>

              <div class="form-control">
                <label class="label" for="title">
                  <span class="label-text">Tittel/Stilling</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Utvikler"
                  class="input input-bordered"
                  bind:value={accountForm.title}
                />
              </div>

              <div class="form-control">
                <label class="label" for="location">
                  <span class="label-text">Sted</span>
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Oslo, Norge"
                  class="input input-bordered"
                  bind:value={accountForm.location}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Password Change Card -->
      <div class="card bg-base-100 shadow-xl mt-6">
        <div class="card-body">
          <div class="flex items-center justify-between mb-4">
            <h2 class="card-title text-xl">
              <span class="icon-[mdi--lock] mr-2 h-5 w-5"></span>
              Passord
            </h2>
            <button class="btn btn-outline btn-sm" onclick={() => (showPasswordFields = !showPasswordFields)}>
              {showPasswordFields ? "Avbryt" : "Endre passord"}
            </button>
          </div>

          {#if showPasswordFields}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="form-control">
                <label class="label" for="newPassword">
                  <span class="label-text">Nytt passord</span>
                </label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="••••••••"
                  class="input input-bordered"
                  bind:value={accountForm.newPassword}
                />
                <label class="label">
                  <span class="label-text-alt">Minst 8 tegn</span>
                </label>
              </div>

              <div class="form-control">
                <label class="label" for="confirmPassword">
                  <span class="label-text">Bekreft nytt passord</span>
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  class="input input-bordered validator"
                  minlength="8"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]&#123;8,&#125;$"
                  bind:value={accountForm.confirmPassword}
                />
                <p class="validator-hint hidden">
                  Må være mer enn 8 tegn, inkludert minst ett tall, en liten bokstav og en stor bokstav.
                </p>
              </div>
            </div>
          {:else}
            <div class="alert alert-info">
              <span class="icon-[mdi--info-circle] h-5 w-5"></span>
              <span>Klikk "Endre passord" for å oppdatere passordet ditt.</span>
            </div>
          {/if}
        </div>
      </div>

      <!-- Save Button -->
      <div class="card bg-base-100 shadow-xl mt-6">
        <div class="card-body">
          <div class="card-actions justify-between items-center">
            <div class="text-sm text-base-content/70">
              Alle endringer lagres automatisk når du klikker "Lagre endringer"
            </div>
            <button class="btn btn-primary" class:loading={isSaving} onclick={saveAccount} disabled={isSaving}>
              {#if isSaving}
                <span class="loading loading-spinner loading-sm"></span>
                Lagrer...
              {:else}
                <span class="icon-[mdi--content-save] mr-2 h-4 w-4"></span>
                Lagre endringer
              {/if}
            </button>
          </div>
        </div>
      </div>
    {/if}
  {:else}
    <div class="hero bg-base-200 rounded-box">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <span class="icon-[mdi--alert-circle] h-16 w-16 mx-auto mb-4 text-warning"></span>
          <h2 class="text-2xl font-bold">Ingen kategori valgt</h2>
          <p class="py-4">Velg en kategori fra fanene ovenfor for å fortsette.</p>
        </div>
      </div>
    </div>
  {/if}
</div>
