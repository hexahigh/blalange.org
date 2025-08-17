<script lang="ts">
  import { setTheme } from "$root/src/lib/stores/theme";
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";

  interface Props {
    theme: string;
    class?: string;
    displayName?: string;
  }
  let { theme, class: className, displayName }: Props = $props();
</script>

<button
  type="button"
  class={twMerge(
    "border-accent overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent w-full text-left",
    className,
  )}
  data-act-class="outline-base-content!"
  data-set-theme={theme}
  onclick={() => setTheme(theme)}
  data-theme={theme}
  aria-label={`Set theme to ${theme}`}
>
  <div class="bg-base text-base-content w-full cursor-pointer font-sans">
    <div class="grid grid-cols-5 grid-rows-3">
      <div class="bg-base-100 col-start-1 row-span-2 row-start-1"></div>
      <div class="bg-base-200 col-start-1 row-start-3"></div>
      <div class="bg-base-300 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
        <div class="font-bold">{(displayName ? displayName : theme)}</div>
        <div class="flex flex-wrap gap-1">
          <div class="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-primary-content text-sm font-bold">A</div>
          </div>
          <div class="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-secondary-content text-sm font-bold">A</div>
          </div>
          <div class="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-accent-content text-sm font-bold">A</div>
          </div>
          <div class="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
            <div class="text-neutral-content text-sm font-bold">A</div>
          </div>
        </div>
      </div>
    </div>
  </div></button
>
