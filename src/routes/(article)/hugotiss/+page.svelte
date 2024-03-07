<script>
  import { MetaTags } from "svelte-meta-tags";
  import calendar from "$lib/svg/calendar.svg";
  import person from "$lib/svg/person.svg";
  import hugo from "$lib/img/people/hugo2.jpg";
  import Nav from "../../Nav.svelte";
</script>

<MetaTags
  title="Hugotiss"
  titleTemplate="%s | Blålange"
  description="Sex skandale"
  canonical="https://blalange.org/hugotiss"
  openGraph={{
    url: "https://blalange.org/hugotiss",
    title: "Hugotiss | Blålange",
    description: "Sex skandale",
    images: [
      {
        url: "https://blalange.org/img/people/hugo.jpg",
        width: 401,
        height: 505,
        alt: "Hugo Holmquist",
      },
    ],
    siteName: "Blålange festivalen",
  }}
/>

<Nav />

<div
  class="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div>
    <img
      src={hugo}
      class="w-screen aspect-[16/9] object-fill rounded-lg"
      alt="Article Image"
    />
    <div class="text-xl font-medium text-black">
      Homofil anal-sex skandale på Cicignon Skole
    </div>
    <p class="text-gray-500">
      <img src={person} class="w-6 h-6 icon" /> Simon Bråten, Hermann Roos
    </p>
    <p class="text-gray-500">
      <img src={calendar} class="w-6 h-6 icon" /> 4 Februar 2024
    </p>
    <div class=" m-9 text-gray-800">
      <p class="mt-2">
        En nylig hendelse på Cicignon Skole har blitt dokumentert av vårt
        journalist-team, og dette har blitt en stor sak. Fra en gruppe
        ungdomskole elever har vi fått vite at Hugo Holmquist og Patryk Kåre
        Kadziolka har hatt anal sex i garderoben. Dette var visst ikke første
        gangen de hadde gjort det som Hugo forklarer i et intervju.
      </p>
      <div
        class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"
      >
        <svg
          class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <p
          class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"
        >
          "Jeg kom"
        </p>
        <p
          class="text-l italic font-medium leading-relaxed text-gray-900 dark:text-white"
        >
          -Hugo Holmquist
        </p>
      </div>
      <p class="mt-2">
        Vi har intervjuet Patryk Kadziolka og det her er det han hadde å si:
      </p>
      <div
        class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800"
      >
        <p
          class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"
        >
        -(Reporter) "Hvordan var det?"<br>
        -(Patryk) "Den bare falt inn. Det var en opplevelse, det må jeg virkelig si."<br>
        -(Reporter) "Det har gått rykter om at noe lignende har skjedd før, er det sant?"<br>
        -(Patryk) "Det skjedde sånn cirka 1 år siden, men folk kan ikke hele historien."<br>
        -(Reporter) "Kan du forklare hva som skjedde?"<br>
        -(Patryk) "Vi var i fellesdusjen og så var det en jævel som skrudde av lyset, Hugo gikk bakover og kræsjet inn i meg."<br>
        -(Reporter) "Hva skjedde etter det?"<br>
        -(Patryk) "Den slapp inn. Hugo bykset vekk fra meg, det var ganske gøy."
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .icon {
    width: 2em;
    display: inline;
    margin-right: 0px;
    position: relative;
    top: -0.1em;
  }
</style>
