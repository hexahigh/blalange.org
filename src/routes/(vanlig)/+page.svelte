<script>
  import { MetaTags } from "svelte-meta-tags";
  import Form from "$lib/components/form.svelte";
  import Donate from "$lib/components/donate.svelte";
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

<div class="bg-base text-text">
  
  <div
    class="bg-fixed bg-no-repeat bg-cover text-white text-center p-20"
    style="background-image: url(/img/bg1.png);"
  >
    <h2 class="text-3xl">Hva er blålange festivalen?</h2>
    <p class="text-xl">
      Blålange festivalen er en årlig stor-fest med konkurranser, talentshow og Celvin.
      <br>
      Vi arbeider med å lage et inkulderende felleskap som elsker partylys.
      Vi tjener ingenting av Blålange festivalen, det er bare for gøy og pengene vi får inn blir brukt for fremtidige fester.

      Så bli med, du og!
    </p>
  </div>

  <Donate />
  
  <div class="text-center">
    <h2 class="text-3xl">Bli med</h2>
    <p>Vil du bli med på neste Festival? Svar på dette skjemaet.</p>
    <div class="text-left flex justify-center">
      <Form />
    </div>
  </div>
</div>
