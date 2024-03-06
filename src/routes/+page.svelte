<script>
  import Nav from "./Nav.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import Form from "$lib/components/form.svelte";
  import imgWeb from "$lib/img/home/web.svg";
  import imgWebS from "$lib/img/home/web-s.svg";
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
      },
    ],
    siteName: "Blålange festivalen",
  }}
/>

<!--<Countdown />-->

<div class="bg-base text-text">
  <Nav />
  <div
    class="bg-fixed bg-no-repeat bg-cover text-white text-center p-20"
    style="background-image: url(/img/bg1.png);"
  >
    <h2 class="text-3xl">Hva er blålange festivalen?</h2>
    <p class="text-xl">
      Blålange festivalen er en årlig stor-fest med konkurranser, talentshow og Celvin.

      Vi arbeider med å lage et inkulderende felleskap som elsker partylys.
      Vi tjener ingenting av Blålange festivalen, det er bare for gøy og pengene vi får inn blir brukt for fremtidige fester.

      Så bli med, du og!
    </p>
  </div>
  <div class="rounded-2xl p-5 flex pl-48 pr-48">
    <img src={imgWeb} alt="Web" class="w-96 h-96" />
    <div class="item-body">
      <h3 class="text-3xl dela">Bli med på festivalen fra hvor som helst!</h3>
      <p class="text-xl roboto-condensed">
        For bare 20kr får du tilgang til hele festen fra din mobil, pc eller tv!
        Med enkel tilgang til liveshowet for lav pris er dette den perfekte
        måten å prøve uten å tape noe. Så hva venter du på? Kjøp nå!
      </p>
    </div>
  </div>
  <div class="rounded-2xl p-5 flex pl-48 pr-48">
    <div class="item-body">
      <h3 class="text-3xl dela">Bli med på festivalen fra hvor som helst!</h3>
      <p class="text-xl roboto-condensed">
        For bare 20kr får du tilgang til hele festen fra din mobil, pc eller tv!
        Med enkel tilgang til liveshowet for lav pris er dette den perfekte
        måten å prøve uten å tape noe. Så hva venter du på? Kjøp nå!
      </p>
    </div>
    <img src={imgWebS} alt="WebS" class="w-96 h-96" />
  </div>
  <div class="text-center">
    <h2 class="text-3xl">Bli med</h2>
    <p>Vil du bli med på neste Festival? Svar på dette skjemaet.</p>
    <div class="text-left flex justify-center">
      <Form />
    </div>
  </div>
</div>
