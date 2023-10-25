<script>
  import autoAnimate from "@formkit/auto-animate";
  import {
    EnvelopeSolid,
    UserCircleSolid,
    QuestionCircleSolid,
  } from "flowbite-svelte-icons";

  let email = "";
  let name = "";
  let yesOrNo = "";
  let secondYesOrNo = "";
  let image = null;
  let geoLocation = "";

  function handleSubmit() {
    // Handle form submission logic here
  }

  function clearImage() {
    image = null;
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          geoLocation = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
          console.log(geoLocation);
          document.getElementById("geoSuccessText").innerText =
            "Fikk tak i lokasjonen";
            document.getElementById("geoSuccess").checked = true
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
    <span class="mb-2">Email</span>
    <div class="flex items-center">
      <EnvelopeSolid class="h-5 w-5 mr-2 text-orange-500" />
      <input
        bind:value={email}
        class="border-2 border-orange-500 p-2 w-full rounded-md"
        type="email"
        placeholder="john@example.com"
        required
      />
    </div>
  </label>

  <label class="flex flex-col mb-4">
    <span class="mb-2">Name</span>
    <div class="flex items-center">
      <UserCircleSolid class="h-5 w-5 mr-2 text-orange-500" />
      <input
        bind:value={name}
        class="border-2 border-orange-500 p-2 w-full rounded-md"
        type="text"
        placeholder="John Doe"
        required
      />
    </div>
  </label>

  <div class="mb-4">
    <span class="mb-2">Yes or No?</span>
    <div class="flex items-center">
      <label class="flex items-center mr-4">
        <QuestionCircleSolid class="h-5 w-5 mr-2 text-orange-500" />
        <input bind:group={yesOrNo} class="mr-2" type="radio" value="yes" />
        <span>Yes</span>
      </label>
      <label class="flex items-center">
        <input bind:group={yesOrNo} class="mr-2" type="radio" value="no" />
        <span>No</span>
      </label>
    </div>
  </div>

  <div class="mb-4">
    <span class="mb-2">Second Yes or No?</span>
    <div class="flex items-center">
      <label class="flex items-center mr-4">
        <QuestionCircleSolid class="h-5 w-5 mr-2 text-orange-500" />
        <input
          bind:group={secondYesOrNo}
          class="mr-2"
          type="radio"
          value="yes"
        />
        <span>Yes</span>
      </label>
      <label class="flex items-center">
        <input
          bind:group={secondYesOrNo}
          class="mr-2"
          type="radio"
          value="no"
        />
        <span>No</span>
      </label>
    </div>
  </div>

  {#if secondYesOrNo === "yes"}
    <label class="flex flex-col mb-4">
      <span class="mb-2">Lokasjon</span>
      <button
        class="border-2 border-orange-500 p-2 rounded-md"
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
      <span class="mb-2">Image</span>
      {#if image}
        <div class="flex items-center">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded Image"
            class="h-20 w-20 mr-2 rounded-md"
          />
          <button
            class="bg-red-500 text-white p-2 rounded-md"
            on:click={clearImage}>Clear Image</button
          >
        </div>
      {:else}
        <input
          type="file"
          accept="image/*"
          on:change={(e) => {
            image = e.target.files[0];
          }}
          class="border-2 border-orange-500 p-2 w-full rounded-md"
        />
      {/if}
    </label>
  {/if}
  <button
    class="bg-orange-500 text-white p-2 mt-4 rounded-md"
    id="submitButton"
    type="submit">Submit</button
  >
</form>
