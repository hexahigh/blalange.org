<script lang="ts">
  import Metatags from "$lib/components/metatags.svelte";
  import { languageTag } from "$lib/paraglide/runtime";
  import "$lib/css/md.pcss";
  export let data;

  const getTranslation = () => {
    const lang = languageTag();
    return data.translations[lang] || data.translations.default || '';
  };
</script>

<Metatags
  title="TOS"
  description="TOS for blalange.org"
  url="/tos"
/>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert">
  {@html getTranslation()}
</div>