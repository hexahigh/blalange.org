<script>
  import Nav from "../Nav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
  import herremann from "$lib/img/people/herremann.jpg"
</script>

<!--<nav />-->
<div class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
  <Card img={cicignonPreview} href="/" size="md">
     <h5
       class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
     >
       Noteworthy technology acquisitions 2021
     </h5>
     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
       Here are the biggest enterprise technology acquisitions of 2021 so far, in
       reverse chronological order.
     </p>
  </Card>
  <Card img={herremann} href="/" size="md" class="w-[200px] h-[200px]">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Noteworthy technology acquisitions 2021
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
 </Card>
  <!-- Add more Card components here -->
 </div>