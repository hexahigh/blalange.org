<script lang="ts">
  import { preventDefault } from 'svelte/legacy';

  import autoAnimate from "@formkit/auto-animate";
  import { getDirectusInstance } from '../js/directus';
  import { createItem } from '@directus/sdk';
  import {
    EnvelopeSolid,
    UserCircleSolid,
    QuestionCircleSolid,
  } from "flowbite-svelte-icons";

  const client = getDirectusInstance();

  let email = $state("");
  let name = $state("");
  let filmed = $state("");
  let manOrWoman = "";
  let extra = $state("");
  let age = 0;
  let status = $state("");

  async function handleSubmit() {
    const formData: any = {}
    formData.time = Date.now().toString()
    formData.timeutc = new Date().toUTCString()
    formData.name = name
    formData.email = email
    formData.MW = manOrWoman
    formData.extra = extra
    formData.filmed = filmed
    formData.age = age

    if (!name || !filmed || !extra) {
      status = "Fyll ut alle feltene markert med *";
      return;
    }

    try {
      await client.request(createItem("form_responses", {
        form_id: "homepage1",
        data: formData
      }));
    } catch (error) {
      console.error(error);
      status = "Noe gikk galt: " + error;
    } finally {
      status = "Takk for din melding!";
      email = "";
      name = "";
      extra = "";
      age = 0;
      filmed = "";
      manOrWoman = "";
    }
  }
</script>

<form
  class="flex flex-col m-8"
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
        placeholder="Jeg skal spille gitar og..."
        required
></textarea>
    </div>
  </label>
  
  <button
    onclick={handleSubmit}
    class="blue-btn"
    id="submitButton"
    type="button">Send inn</button
  >
  <p>{status}</p>
</form>
