<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";

  import itCosts from "$lib/audio/it-costs.ogg";
  import { Howl, Howler } from "howler/dist/howler.core.min.js";

  function play() {
    const sound = new Howl({
      src: [itCosts],
      html5: true,
    });
    sound.play();
  }
</script>

<div class="flex justify-center flex-col text-center m-auto md:w-1/2">
  <h2 class="text-3xl">FAQ</h2>
  <Accordion class="w-full">
    <AccordionItem
      class="hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
    >
      {#snippet header()}
            <span 
          >Hvor mye koster det å bli med på Blålange festivalen?</span
        >
          {/snippet}
      <button
        onclick={play}
        class="mb-2 text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded p-2"
        >Trykk her</button
      >
      <p class="text-black dark:text-white">
        Jeg tuller, du kan donere 400 tusen hvis du vil men det er helt gratis å
        bli med.
      </p>
    </AccordionItem>
    <AccordionItem
      class="hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
    >
      {#snippet header()}
            <span >Må jeg opptre?</span>
          {/snippet}
      <p class="text-black dark:text-white">
        Nei, men vi ville blitt veldig glad om du gjorde det. Det blir litt
        kjedelig hvis ingen gjør noe.
      </p>
    </AccordionItem>
  </Accordion>
</div>
