<script>
  import { MetaTags } from "svelte-meta-tags";
  import calendar from "$lib/svg/calendar.svg";
  import person from "$lib/svg/person.svg";
  import rebrand_logo from "$lib/img/article/rebrand_logo.png?enhanced"

  console.log(rebrand_logo)
</script>

<MetaTags
  title="Nytt navn"
  titleTemplate="%s | Blålange"
  description="Kukfest har byttet navn"
  canonical="https://blalange.org/rebrand"
  openGraph={{
    url: "https://blalange.org/rebrand",
    title: "Nytt navn | Blålange",
    description: "Kukfest har byttet navn",
    siteName: "Blålange festivalen",
  }}
/>



<div
  class="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div>
    <enhanced:img
      src={rebrand_logo}
      class="w-screen aspect-[16/9] object-fill rounded-lg"
      alt="Article Image"
    />
    <div class="text-xl font-medium text-black">
      Vi har byttet navn!
    </div>
    <p class="text-gray-500">
      <img src={person} class="w-6 h-6 icon" /> Simon Bråten
    </p>
    <p class="text-gray-500">
      <img src={calendar} class="w-6 h-6 icon" /> 7 Mars 2024
    </p>
    <div class=" m-9 text-gray-800">
      <p class="mt-2">
        Heihei, vi har nylig byttet navn fra Kukfest til Blålange festivalen, vi byttet det for å være mer inkluderende og mindre krenkende.
        <br>
        Men du spør kanskje, hvorfor kalte dere det Blålange festivalen?
        Vi kalte det Blålange festivalen fordi Blålangen er Lars Oscar sin favoritt fisk, vi håper å overraske han med det nye navnet og invitere han til Blålange festivalen 2024.
      </p>
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
