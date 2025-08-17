<script lang="ts">
  import { latestVersion, commitHash, buildDate } from "$lib/js/version";
  import { Tooltip } from "flowbite-svelte";
  import logo from "$lib/img/logo_no-bg.svg";
  import * as m from "$lib/paraglide/messages.js";
</script>

<footer class="w-full">
  <div
    class="flex flex-col md:flex-row justify-center p-4 bg-secondary text-secondary-content space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left"
  >
    <div class="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
      <img src={logo} alt="Blålange Logo" class="w-24 h-24" />
      <span class="font-bold ibm-plex-sans text-2xl">Blålange</span>
    </div>
    <div>
      <p class="font-bold">Kontakt oss</p>
      <ul>
        <li>
          <a href="mailto:contact@blalange.org" class="underline">contact@blalange.org</a>
        </li>
        <li>
          <a href="/livechat" class="underline">Livechat</a>
        </li>
      </ul>
    </div>
    <div>
      <p class="font-bold">Hjelp</p>
      <ul>
        <li>
          <a href="/tos" class="underline">Bruksvilkår</a>
        </li>
        <li>
          <a href="/privacy" class="underline">Personvernerklæring</a>
        </li>
        <li>
          <a href="https://github.com/hexahigh/blalange.org" class="underline">Kildekode</a>
        </li>
      </ul>
    </div>
    <div>
      <p class="font-bold">Info</p>
      <ul>
        <li>
          <p>Versjon {latestVersion.id}.{commitHash} - {latestVersion.name}</p>
          <Tooltip>Bygd {new Date(buildDate).toLocaleString()}</Tooltip>
        </li>
        <li>
          <p>
            Innhold © Blålange {new Date().getFullYear()}, lisensiert under
            <a href="https://creativecommons.org/licenses/by/4.0/" class="underline">CC BY 4.0</a>, kode:
            <a href="https://mozilla.org/MPL/2.0/" class="underline">MPL 2.0</a>
          </p>
        </li>
        <li>
          <p>
            Organisasjonsnummer: <a href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=933945820" class="underline">933 945 820</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</footer>
