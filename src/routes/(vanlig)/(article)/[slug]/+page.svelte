<script>
    import { MetaTags } from "svelte-meta-tags";
    import calendar from "$lib/svg/calendar.svg";
    import person from "$lib/svg/person.svg";
    import rebrand_logo from "$lib/img/article/rebrand_logo.png"
    
    export let data;
  </script>
  
  <MetaTags
    title=""
    titleTemplate="%s | Blålange"
    description=""
    canonical="https://blalange.org/rebrand"
    openGraph={{
      url: "https://blalange.org/rebrand",
      title: "Nytt navn | Blålange",
      description: "Kukfest har byttet navn",
      images: [
        {
          url: {rebrand_logo},
          width: 1055,
          height: 1055,
          alt: "New logo",
        },
      ],
      siteName: "Blålange festivalen",
    }}
  />
  
  
  
  <div
    class="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div>
      <img
        src={rebrand_logo}
        class="w-screen aspect-[16/9] object-fill rounded-lg"
        alt="Article Image"
      />
      <div class="text-xl font-medium text-black">
        "title"
      </div>
      <p class="text-gray-500">
        <img src={person} class="w-6 h-6 icon" /> "author"
      </p>
      <p class="text-gray-500">
        <img src={calendar} class="w-6 h-6 icon" /> "date"
      </p>
      <div class=" m-9 text-gray-800">
        <svelte:component this={data.content} />
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
  