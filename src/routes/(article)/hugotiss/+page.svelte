<script>
	import cicignon from '$lib/img/article-previews/cicignon.jpg';
  import { MetaTags } from "svelte-meta-tags";
  import calendar from "$lib/svg/calendar.svg";
  import person from "$lib/svg/person.svg";
  import hugo from "$lib/img/people/hugo2.jpg";
</script>

<MetaTags
  title="Hugotiss"
  titleTemplate="%s | Kukfest"
  description="Sex skandale"
  canonical="https://kukfest.eu/hugotiss"
  openGraph={{
    url: "https://kukfest.eu/hugotiss",
    title: "Hugotiss | Kukfest",
    description: "Sex skandale",
    images: [
      {
        url: "https://kukfest.eu/img/people/hugo.jpg",
        width: 401,
        height: 505,
        alt: "Hugo Holmquist",
      },
    ],
    siteName: "Kukfest",
  }}
/>

<div
  class="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div>
    <img
      src={hugo}
      class="w-screen aspect-[16/9] object-fill rounded-lg"
      alt="Article Image"
    />
    <div class="text-xl font-medium text-black">Homofil anal-sex skandale på Cicignon Skole</div>
    <p class="text-gray-500">
      <img src={person} class="w-6 h-6 icon" />Simon Bråten & Hermann Roos
    </p>
    <p class="text-gray-500">
      <img src={calendar} class="w-6 h-6 icon" /> 4 Februar 2024
    </p>
    <div class="max-w-2xl m-9 text-gray-800">
      <p class="mt-2">
        En nylig hendelse på Cicignon Skole har blitt dokumentert av vårt journalist-team, og dette har blitt en stor sak. Fra en gruppe ungdomskole elever har vi fått vite at Hugo Holquist og Patryk Kåre Kadziolka har hatt anal sex i garderoben. Dette var visst ikke første
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
