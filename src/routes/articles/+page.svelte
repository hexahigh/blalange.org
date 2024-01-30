<script>
  import Nav from "../Nav.svelte";
  import { Card, Button } from "flowbite-svelte";
  import cicignonPreview from "$lib/img/article-previews/cicignon.jpg";
</script>

<!--<nav />-->
<div class="w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center flex-wrap gap-2">
  <div class="space-y-4">
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
  </div>
</div>