<script>
  import { Avatar } from "flowbite-svelte";
  import PocketBase from "pocketbase";

  const pb = new PocketBase("https://db.080609.xyz");
  let user;
  let pass;
  let message;
  let image;
  let success;
  let email = "";
  let infoText;

  let mode = "login";

  function switchMode(s) {
    mode = s
  }

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

  async function logout() {
    pb.authStore.clear();
  }

  async function auth() {
    if (mode === "signup") {
      await signup();
      return
    }
    pb.authStore.clear();
    try {
      await pb.collection("users").authWithPassword(user, pass);
    } catch (error) {
      message = "An error occurred: " + error;
    }

    if (pb.authStore.isValid) {
      success = true;
      const record = await pb.collection("users").getOne(pb.authStore.model.id);
      image = pb.files.getUrl(record, record.avatar);
    }
  }

  async function signup() {
    pb.authStore.clear();
    try {
      await pb.collection("users").create({
        username: user,
        password: pass,
        passwordConfirm: pass,
      });
      infoText = "Signup successful, please login";
    } catch (error) {
      message = "An error occurred: " + error;
    }
  }
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  <div
    class="p-6 mt-10 rounded shadow-md shadow-black w-80 text-center dark:text-white"
  >
    <h1 class="text-2xl font-bold mb-4">Login / Signup</h1>
    {#if isLoggedIn()}
      <p>You are logged in as {getUserName()}</p>
    {/if}
    <form on:submit|preventDefault>
      <input
        placeholder="Username"
        bind:value={user}
        class="w-full mb-4 p-2 border-black border-2 rounded dark:bg-gray-900 dark:border-gray-700"
      />
      <input
        placeholder="Password"
        type="password"
        bind:value={pass}
        class="w-full mb-4 p-2 border-black border-2 rounded dark:bg-gray-900 dark:border-gray-700"
      />
      <button
        on:click={auth}
        type="button"
        class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4"
        >{mode}</button
      >
      <button
        on:click={logout}
        type="button"
        class="w-full p-2 bg-red-500 text-white rounded hover:bg-red-700"
        >Logout</button
      >
      {#if message}
        <p class="text-red-500">{message}</p>
      {/if}
      {#if infoText}
        <p class="text-green-500">{infoText}</p>
      {/if}
      {#if success}
        <p class="text-green-500">Success!</p>
        <div class="flex items-center justify-center mt-4">
          <img src={image} alt="Avatar" class="w-10 h-10 rounded-full" />
          <p>Hello {user}!</p>
        </div>
      {/if}
    </form>
      <p class="mt-4">
        Don't have an account? <button class="blue-btn" on:click={switchMode("signup")}
          >Signup</button
        >
      </p>
  </div>
</div>
