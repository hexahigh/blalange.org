<script lang="ts">
  import { languageTag } from "$lib/paraglide/runtime";
</script>

<!-- <call-us-selector phonesystem-url="https://1468.3cx.cloud" party="blalange"></call-us-selector> -->

<call-us phonesystem-url="https://1468.3cx.cloud" party="blalange" lang={languageTag}></call-us>

<svelte:head>
  <script
    defer
    src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
    id="tcx-callus-js"
    charset="utf-8"
  ></script>
</svelte:head>
