<script lang="ts">
  import Metatags from "$lib/components/metatags.svelte";
  import "$lib/css/md.css";
  export let data;

  const getTranslation = () => {
    return data.translations.default || "";
  };
</script>

<Metatags title="Privacy Policy" description="Privacy Policy for blalange.org" url="/privacy" />

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert">
  {@html getTranslation()}
</div>
