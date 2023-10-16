<script>
  import Countdown from "./countdown.svelte";
  import Nav from "./Nav.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import Reviews from "../lib/components/reviews.svelte";
</script>

<MetaTags
  title="Kukfest"
  titleTemplate="%s | Kukfest"
  description="Kukfest har masse kuk"
  canonical="https://kukfest.eu"
  openGraph={{
    url: "https://kukfest.eu",
    title: "Kukfest",
    description: "Mye kuk",
    images: [
      {
        url: "https://kukfest.eu/img.jpg",
        alt: "Kukfest logo",
      },
    ],
    siteName: "Kukfest",
  }}
/>
<svelte:head />

<Nav />

<Countdown />

<div
  class="bg-fixed bg-no-repeat bg-cover text-white text-center"
  style="background-image: url(/img/bg1.png);"
>
  <h2 class="text-3xl">Hva er kukfest?</h2>
  <p class="text-xl">
    Kukfest er en liten festival som skjer på en minecraft server kjørt av noen
    venner. Den startet i 2023 og blir større for vært år. Det er minigames, et
    talentshow og mange andre gøye aktiviteter. Akkurat nå så er den eneste
    måten å bli med er å bli invitert.
  </p>
</div>
<div>
  <div class="text-center">
    <h2 class="text-3xl">Se vår episke trailer</h2>
  </div>
  <div class="mt-5 justify-center flex">
    <video class="w-96 rounded border border-black" controls>
      <source src="/vid/Kukfest 23.1 8K Trailer 1.webm" type="video/webm" />
      <source src="/vid/Kukfest 23.1 8K Trailer 1 H265.mp4" type="video/mp4" />
      <source src="/vid/Kukfest 23.1 8K Trailer 1 x264.mp4" type="video/mp4" />
      <source src="/vid/Kukfest 23.1 8K Trailer 1 theora.mkv" type="video/x-matroska" />
    </video>
  </div>
</div>
<!--<div>
  <div class="text-center">
    <h2 class="text-3xl">Anmeldelser</h2>
  </div>
  <Reviews />
</div>-->
