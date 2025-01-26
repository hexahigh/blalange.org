<script lang="ts">
  import { createBubbler, preventDefault } from "svelte/legacy";

  const bubble = createBubbler();
  import logoSvg from "$lib/img/favicon.svg";
  import Metatags from "$lib/components/metatags.svelte";
  import { getDirectusInstance, isLoggedIn } from "$lib/js/directus";
  import { passwordRequest, readMe } from "@directus/sdk";

  const client = getDirectusInstance();

  let email = $state("");
  let pass = $state("");

  let message = $state();
  let messageType = $state("info");
  let success;
  let rememberMe = $state();

  async function getUserName() {
    const user = await client.request(readMe());
    return user.first_name;
  }

  async function login() {
    if (isLoggedIn()) {
      await client.logout();
    }
    try {
      await client.login(email, pass);
    } catch (error) {
      messageType = "error";
      message = "An error occurred: " + error.errors[0].message;
      return;
    }
    success = true;
    messageType = "success";
    message = "Hei " + (await getUserName()) + ", du er nå innlogget";
  }

  async function requestReset() {
    if (!email) {
      messageType = "error";
      message = "Vennligst skriv inn en epostadresse for å tilbakestille passordet";
      return;
    }
    await client.request(passwordRequest(email));

    messageType = "success";
    message = "Eposten er blitt sendt til deg";
  }
</script>

<Metatags title="Logg inn" description="Logg inn på blalange.org" url="/login" />

<section class="dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img class="w-8 h-8 mr-2" src={logoSvg} alt="logo" />
      Blålange
    </a>
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Logg inn
        </h1>
        <form class="space-y-4 md:space-y-6" onsubmit={preventDefault(bubble("submit"))}>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Epost</label>
            <input
              bind:value={email}
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              bind:value={pass}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required={true}
            />
          </div>
          <div class="flex items-center justify-between">
            <a
              onclick={requestReset}
              href=""
              class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Glemt passordet?</a
            >
          </div>
          {#if message}
            {#if messageType == "error"}
              <div
                class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                {message}
              </div>
            {:else if messageType == "info"}
              <div
                class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                role="alert"
              >
                {message}
              </div>
            {:else if messageType == "success"}
              <div
                class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
              >
                {message}
              </div>
            {/if}
          {/if}
          <button
            type="button"
            onclick={login}
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >Logg inn</button
          >
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Har du ikke en konto? <a
              href="/signup"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500">Lag en nå!</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
