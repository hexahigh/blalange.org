<script>
  import { AccordionItem, Accordion } from "flowbite-svelte";

  import itCosts from "$lib/audio/it-costs.ogg";
  import { Howl, Howler } from "howler";

  function play() {
    const sound = new Howl({
      src: [itCosts],
      html5: true,
    });
    sound.play();
  }
</script>

<div class="flex justify-center flex-col text-center m-auto md:w-1/2">
    <h2 class="text-4xl rimword">FAQ</h2>
<Accordion class="w-full">
    <AccordionItem class="hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white">
      <span slot="header">Hvor mye koster det å bli med på Blålange festivalen?</span>
      <button on:click={play} class="mb-2 text-black dark:text-white bg-gray-200 dark:bg-gray-800 rounded p-2">Trykk her</button>
      <p class="text-black dark:text-white">Jeg tuller, du kan donere 400 tusen hvis du vil men det er helt gratis å bli med.</p>
    </AccordionItem>
    <AccordionItem class="hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white">
      <span slot="header">Må jeg opptre?</span>
      <p class="text-black dark:text-white">Nei, men vi ville blitt veldig glad om du gjorde det. Det blir litt kjedelig hvis ingen gjør noe.</p>
    </AccordionItem>
  </Accordion>
</div>