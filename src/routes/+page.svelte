<script>
  import Countdown from "./countdown.svelte";
  import Nav from "./Nav.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import Reviews from "../lib/components/reviews.svelte";
  import Form from "$lib/components/form.svelte";
  import Team from "$lib/components/team.svelte";
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
        url: "https://kukfest.eu/img/favicon.png",
        alt: "Kukfest logo",
      },
    ],
    siteName: "Kukfest",
  }}
/>

<!--<Countdown />-->

<div class="bg-base text-text">
  <Nav />
  <div
    class="bg-fixed bg-no-repeat bg-cover text-white text-center p-20"
    style="background-image: url(/img/bg1.png);"
  >
    <h2 class="text-3xl">Hva er kukfest?</h2>
    <p class="text-xl">
      Kukfest er en liten festival som skjer et par ganger i året. Det er arrangert og kjørt av noen venner som like å ha det gøy. Vi har minst en stor fest per år og noen mindre.
    </p>
  </div>
  <div>
    <div class="text-center">
      <h2 class="text-3xl">Se vår episke trailer</h2>
    </div>
    <div class="mt-5 justify-center flex">
      <video class="w-96 rounded border border-black" controls>
        <source
          src="/vid/Kukfest 23.1 8K Trailer 1 vp9.webm"
          type="video/webm"
        />
        <source
          src="/vid/Kukfest 23.1 8K Trailer 1 H265.mp4"
          type="video/mp4"
        />
        <source
          src="/vid/Kukfest 23.1 8K Trailer 1 x264.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
  <div class="text-center mocha">
    <h2 class="text-3xl">Bli med</h2>
    <p>Vil du bli med på neste Kukfest? Svar på dette skjemaet.</p>
    <div class="text-left flex justify-center">
      <Form />
    </div>
  </div>
</div>