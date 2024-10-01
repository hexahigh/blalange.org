<script lang="ts">
  import { latestVersion, commitHash, buildDate } from "$lib/js/version";
  import { Tooltip } from "flowbite-svelte";
</script>

<footer
  class="w-full text-center p-4 bg-gray-200 text-black dark:bg-gray-900 dark:text-white"
>
  <div class="md:flex md:justify-center md:items-center">
    <div>
      <div class="flex justify-center mb-4 gap-3">
        <a
          href="https://github.com/hexahigh/blalange.org"
          class="hover:underline">Kildekode</a
        >
        <a href="mailto:contact@blalange.org" class="hover:underline">Epost</a
        >
        <a href="/privacy" class="hover:underline">Personvernerklæring</a>
        <a href="/tos" class="hover:underline">TOS</a>
        <a href="https://dev.blalange-org.pages.dev" class="hover:underline"
          >Beta</a
        >
      </div>
      <p>Versjon {latestVersion.id}.{commitHash} - {latestVersion.name}</p>
      <Tooltip class="text-black dark:text-white bg-gray-300">Built {new Date(buildDate).toLocaleString()}</Tooltip>
      <p>
        {new Date().getFullYear()} © Blålange. All rights reserved.
      </p>
      <p>
        The content of this project itself is licensed under the <a
          class="hover:underline"
          href="https://creativecommons.org/licenses/by/4.0/"
          >Creative Commons Attribution 4.0 International license</a
        >, and the underlying source code used to format and display that
        content is licensed under the
        <a class="hover:underline" href="https://mozilla.org/MPL/2.0/"
          >Mozilla Public License v2.0</a
        >.
      </p>
    </div>
  </div>
</footer>
