<script>
  import { MetaTags } from "svelte-meta-tags";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import calendar from "$lib/svg/calendar.svg";
  import person from "$lib/svg/person.svg";
  import hugo from "$lib/img/people/hugo.jpg"
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
        url: "https://kukfest.eu/img/favicon.png",
        width: 300,
        height: 300,
        alt: "Kukfest logo",
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
      src={cicignonPreview}
      class="w-full aspect-[16/9] object-cover rounded-lg"
      alt="Article Image"
    />
    <div class="text-xl font-medium text-black">Hugotiss</div>
    <p class="text-gray-500">
      <img src={person} class="w-6 h-6 icon" />Simon Bråten & Hermann Roos
    </p>
    <p class="text-gray-500">
      <img src={calendar} class="w-6 h-6 icon" /> 4 Februar 2024
    </p>
    <article class="format text-gray-800">
      <p class="mt-2">
        Den *DATO* så hadde Hugo Holmquist og Patryk *ETTERNAVN* homofil anal
        sex i gutte garderoben på Cicignon skole. Dette var visst ikke første
        gangen de hadde gjort det her som Hugo senere forklarte i et intervju.
      </p>
      <figure class="max-w-screen-md mx-auto text-center">
        <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
        <div>
          <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
            Jeg kom
          </p>
        </div>
        <figcaption
          class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse"
        >
          <img
            class="w-6 h-6 rounded-full"
            src={hugo}
            alt="HUGOOO"
          />
            <cite class="pe-3 font-medium text-gray-900 dark:text-white"
              >Hugo Holmquist</cite
            >
        </figcaption>
      </figure>
    </article>
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
