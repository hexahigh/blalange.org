<script>
  import logoSvg from "$lib/img/favicon.svg";
  import PocketBase from "pocketbase";
  import { defaultConfig, config } from "$lib/js/config";
  import Metatags from "$lib/components/metatags.svelte";

  const pb = new PocketBase(defaultConfig.dbEndpoint);

  let user;
  let email;
  let pass;
  let pass2;

  let message;
  let messageType = "info";
  let success;

  function isLoggedIn() {
    if (!pb) return; // Ensure PocketBase is initialized
    return pb.authStore.isValid;
  }

  function getUserName() {
    if (!pb) return; // Ensure PocketBase is initialized

    if (!pb.authStore.isValid) {
      return "Anon";
    }
    return pb.authStore.model.username;
  }

  async function signup() {
    
    if (!email) {
      messageType = "error";
      message = "Vennligst skriv inn en epostadresse";
      return;
    }
    if (!user) {
      messageType = "error";
      message = "Vennligst skriv inn et brukernavn";
      return;
    }
    if (!pass) {
      messageType = "error";
      message = "Vennligst skriv inn et passord";
      return;
    }

    if (pass !== pass2) {
      messageType = "error";
      message = "Passordene er ikke like";
      return;
    }

    pb.authStore.clear();
    try {
      await pb.collection("users").create({
        email: email,
        username: user,
        password: pass,
        passwordConfirm: pass,
      });
      await pb.collection('users').requestVerification(email);
      messageType = "success";
      message = "Kontoen er opprettet, en verifikasjons epost har blitt sendt";
    } catch (error) {
      messageType = "error";
      message = "Noe gikk galt: " + error;
    }
  }

</script>

<Metatags
  title="Opprett konto"
  description="Opprett en konto på blalange.org"
  url="/signup"
/>

<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src={logoSvg} alt="logo">
          Blålange    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Opprett konto
              </h1>
              <form class="space-y-4 md:space-y-6" on:submit|preventDefault>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Epost</label>
                      <input bind:value={email} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="webmaster@blalange.org" required="">
                  </div>
                  <div>
                    <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brukernavn</label>
                    <input bind:value={user} type="text" name="user" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="blålangeElsker22" required="">
                </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input bind:value={pass} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bekreft passord</label>
                      <input bind:value={pass2} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  {#if message}
                    {#if messageType == "error"}
                    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                        {message}
                    </div>
                    {:else if messageType == "info"}
                    <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        {message}
                    </div>
                    {:else if messageType == "success"}
                    <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        {message}
                    </div>
                    {/if}
                  {/if}
                  <button type="none" on:click={signup} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Logg inn</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Har du allerede en konto? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Logg inn</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>