<script>
  import { MetaTags } from "svelte-meta-tags";
  import Form from "$lib/components/form.svelte";
  import Donate from "$lib/components/donate.svelte";

  import * as m from "$lib/paraglide/messages.js";
</script>

<MetaTags
  title="Blålange festivalen"
  titleTemplate="%s | Blålange"
  description="Blålange festivalen er en norsk festival som skjer et par ganger i áret."
  canonical="https://blalange.org"
  openGraph={{
    url: "https://blalange.org",
    title: "Blålange festivalen",
    description:
      "Blålange festivalen er en norsk festival som skjer et par ganger i áret.",
    images: [
      {
        url: "https://blalange.org/img/favicon.png",
        alt: "Blålange logo",
        type: "image/png",
      },
    ],
    siteName: "Blålange festivalen",
  }}
/>

<!--<Countdown />-->

<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
  
  <div
    class="bg-fixed bg-no-repeat bg-cover text-white text-center p-20"
    style="background-image: url(/img/bg1.png);"
  >
    <h1 class="text-3xl krona">{m.home_whatIsBlalange_header()}</h1>
    <p class="text-xl">
      {m.home_whatIsBlalange_text()}
    </p>
  </div>

  <Donate />
  
  <div class="text-center">
    <h2 class="text-3xl font-bold krona">Bli med</h2>
    <p>Vil du bli med på neste Festival? Svar på dette skjemaet.</p>
    <p class="mt-1 text-xs">Felt markert med <span class="text-rose-500">*</span> er nødvendig</p>
    <div class="text-left flex justify-center">
      <Form />
    </div>
  </div>
</div>
