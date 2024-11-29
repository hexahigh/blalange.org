<script>
  import { preventDefault } from 'svelte/legacy';

  import autoAnimate from "@formkit/auto-animate";
  import PocketBase from "pocketbase";
  import {
    EnvelopeSolid,
    UserCircleSolid,
    QuestionCircleSolid,
  } from "flowbite-svelte-icons";
  import { config, defaultConfig } from "$lib/js/config";

  let pb = new PocketBase(defaultConfig.dbEndpoint);

  config.subscribe((value) => {
    pb = new PocketBase(value.dbEndpoint);
  });

  let email = $state("");
  let name = $state("");
  let filmed = $state("");
  let manOrWoman = "";
  let image = null;
  let geoLocation = "";
  let extra = $state("");
  let age = 0;
  let status = $state("");

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("time", Date.now());
    formData.append("timeutc", new Date().toUTCString());
    formData.append("name", name);
    formData.append("email", email);
    formData.append("latlon", geoLocation);
    formData.append("MW", manOrWoman);
    formData.append("extra", extra);
    formData.append("filmed", filmed);
    formData.append("age", age);
    formData.append("ua", getUserAgent());
    if (image) {
      formData.append("image", image);
    }

    if (!name || !filmed || !extra) {
      status = "Fyll ut alle feltene markert med *";
      return;
    }

    try {
      await pb.collection("form").create(formData);
    } catch (error) {
      console.error(error);
      status = "Noe gikk galt: " + error;
    } finally {
      status = "Takk for din melding!";
      email = "";
      name = "";
      geoLocation = "";
      extra = "";
      age = 0;
      filmed = "";
      manOrWoman = "";
      clearImage();
    }
  }

  function clearImage() {
    image = null;
  }

  function getUserAgent() {
    return window.navigator.userAgent;
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          geoLocation = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
          console.log(geoLocation);
          document.getElementById("geoSuccessText").innerText =
            "Fikk tak i lokasjonen";
          document.getElementById("geoSuccess").checked = true;
          document
            .getElementById("geoSuccessText")
            .classList.remove("text-red-600");
          document
            .getElementById("geoSuccessText")
            .classList.add("text-lime-600");
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
</script>

<form
  class="flex flex-col m-8"
  onsubmit={preventDefault(handleSubmit)}
  use:autoAnimate
>
  <label class="flex flex-col mb-4">
    <span class="mb-2">Epost adresse</span>
    <div class="flex items-center">
      <EnvelopeSolid class="h-5 w-5 mr-2 text-blue-500" />
      <input
        bind:value={email}
        class="border-2 border-blue-500 p-2 w-full rounded-md dark:text-black"
        type="email"
        placeholder="celvin@blalange.org"
      />
    </div>
  </label>

  <label class="flex flex-col mb-4">
    <span class="mb-2">Navn <span class="text-rose-500">*</span></span>
    <div class="flex items-center">
      <UserCircleSolid class="h-5 w-5 mr-2 text-blue-500" />
      <input
        bind:value={name}
        class="border-2 border-blue-500 p-2 w-full rounded-md dark:text-black"
        type="text"
        placeholder="Celvin Phau"
        required
      />
    </div>
  </label>

  <div class="mb-4">
    <span class="mb-2"
      >Kan vi filme deg på Blålange Festivalen? <span class="text-rose-500"
        >*</span
      ></span
    >
    <div class="flex items-center">
      <label class="flex items-center mr-4">
        <QuestionCircleSolid class="h-5 w-5 mr-2 text-blue-500" />
        <input bind:group={filmed} class="mr-2" type="radio" value="yes" />
        <span>Ja</span>
      </label>
      <label class="flex items-center">
        <input bind:group={filmed} class="mr-2" type="radio" value="no" />
        <span>Nei</span>
      </label>
    </div>
  </div>

  <label class="flex flex-col mb-4">
    <span
      >Hva skal du presentere og hvordan? <span class="text-rose-500">*</span
      ></span
    >
    <span class="mb-2 text-sm"
      >Husk å inkludere temaer som: sanger, partylys farger og utstyr</span
    >
    <div class="flex items-center">
      <UserCircleSolid class="h-5 w-5 mr-2 text-blue-500" />
      <textarea
        bind:value={extra}
        class="border-2 border-blue-500 p-2 w-full rounded-md dark:text-black"
        type="text"
        placeholder="Jeg skal spille gitar og..."
        required
></textarea>
    </div>
  </label>
  
  <button
    onclick={handleSubmit}
    class="blue-btn"
    id="submitButton"
    type="submit">Send inn</button
  >
  <p>{status}</p>
</form>
