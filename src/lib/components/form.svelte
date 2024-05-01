<script>
  import autoAnimate from "@formkit/auto-animate";
  import PocketBase from "pocketbase";
  import {
    EnvelopeSolid,
    UserCircleSolid,
    QuestionCircleSolid,
  } from "flowbite-svelte-icons";

  const pb = new PocketBase("https://db.080609.xyz");

  let email = "";
  let name = "";
  let filmed = "";
  let manOrWoman = "";
  let image = null;
  let geoLocation = "";
  let extra = "";
  let age = 0;
  let status = "";

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
  on:submit|preventDefault={handleSubmit}
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
      />
    </div>
  </label>

  <!--div class="mb-4">
    <span class="mb-2">Kjønn</span>
    <div class="flex items-center">
      <label class="flex items-center mr-4">
        <QuestionCircleSolid class="h-5 w-5 mr-2 text-blue-500" />
        <input bind:group={manOrWoman} class="mr-2" type="radio" value="man" />
        <span>Gutt</span>
      </label>
      <label class="flex items-center mr-4">
        <input
          bind:group={manOrWoman}
          class="mr-2"
          type="radio"
          value="woman"
        />
        <span>Jente</span>
      </label>
      <label class="flex items-center">
        <input
          bind:group={manOrWoman}
          class="mr-2"
          type="radio"
          value="lars"
        />
        <span>Lars Oscar</span>
      </label>
    </div>
  </div>

  <!--{#if manOrWoman === "woman"}
    <label class="flex flex-col mb-4">
      <span class="mb-2">Lokasjon</span>
      <button
        class="border-2 border-blue-500 p-2 rounded-md"
        type="button"
        on:click={getLocation}>Trykk her</button
      >
      <label class="flex items-center">
        <input
          type="checkbox"
          onclick="return false;"
          id="geoSuccess"
          required
        />
        <span id="geoSuccessText" class="text-red-600"
          >Fikk ikke tak i lokasjonen</span
        >
      </label>
    </label>

    <label class="flex flex-col mb-4">
      <span class="mb-2">Alder</span>
      <input
        bind:value={age}
        type="number"
        class="border-2 border-blue-500 p-2 w-full rounded-md"
        placeholder="69"
        required
      />
    </label>

    <label class="flex flex-col mb-4">
      <span class="mb-2">Bilde av deg</span>
      {#if image}
        <div class="flex items-center">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Image"
            class="h-20 w-20 mr-2 rounded-md"
          />
          <button
            class="bg-red-500 text-white p-2 rounded-md"
            on:click={clearImage}>Reset bilde</button
          >
        </div>
      {:else}
        <input
          type="file"
          accept="image/*"
          on:change={(e) => {
            image = e.target.files[0];
          }}
          class="border-2 border-blue-500 p-2 w-full rounded-md"
        />
      {/if}
    </label>
  {/if}-->
  <button
    on:click={handleSubmit}
    class="blue-btn"
    id="submitButton"
    type="submit">Send inn</button
  >
  <p>{status}</p>
</form>
