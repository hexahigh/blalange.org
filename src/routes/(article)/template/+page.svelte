<script>
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import {
    UserCircleOutline,
    CalendarMonthOutline,
  } from "flowbite-svelte-icons";
  import calendar from "$lib/svg/calendar.svg";
  import person from "$lib/svg/person.svg";
</script>

<div
  class="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
>
  <div>
    <img
      src={cicignonPreview}
      class="w-full aspect-[16/9] object-cover rounded-lg"
      alt="Article Image"
    />
    <div class="text-xl font-medium text-black">Example Article</div>
    <p class="text-gray-500">
      <img src={person} class="w-6 h-6 icon" />By John Doe
    </p>
    <p class="text-gray-500">
      <img src={calendar} class="w-6 h-6 icon" /> January 1, 2022
    </p>
    <p class="mt-2 text-gray-800">
      This is an example article. It's a great place to put your content.
    </p>
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
