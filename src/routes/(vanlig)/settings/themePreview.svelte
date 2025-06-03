<script lang="ts">
  import { setTheme } from '$root/src/lib/stores/theme';
  import { onMount } from 'svelte';

  interface Props {
    theme: string;
  }
  let { theme }: Props = $props();
</script>

<button
  type="button"
  class="border-m-accent overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent w-full text-left"
  data-act-class="outline-base-content!"
  data-set-theme={theme}
  onclick={() => setTheme(theme)}
  data-theme={theme}
  aria-label={`Set theme to ${theme}`}
>
  <div class="bg-m-base text-m-base-text w-full cursor-pointer font-sans">
    <div class="grid grid-cols-5 grid-rows-3">
      <div class="bg-m-mantle col-start-1 row-span-2 row-start-1"></div>
      <div class="bg-m-crust col-start-1 row-start-3"></div>
      <div class="bg-m-base col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
        <div class="font-bold">{theme}</div>
        <div class="flex flex-wrap gap-1">
          <div class="bg-m-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-m-primary-text text-sm font-bold">A</div>
          </div>
          <div class="bg-m-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-m-secondary-text text-sm font-bold">A</div>
          </div>
          <div class="bg-m-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-m-accent-text text-sm font-bold">A</div>
          </div>
          </div>
        </button>
