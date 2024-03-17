<script>
  import { page } from "$app/stores";
 
  let domain = $page.url.host
  let protocol = $page.url.protocol
 
  let status = $page.status
 </script>
 
 <div class="relative w-full h-screen flex justify-center flex-col bg-black">
  <h1 class="text-5xl font-bold text-center z-10 text-white">{status} - {$page.error.message}</h1>
 
  <img class="object-contain h-full inset-0 z-0" src={`${protocol}//${domain}/img/cat/${status}.jpg`} alt={$page.error.message} />
 </div>