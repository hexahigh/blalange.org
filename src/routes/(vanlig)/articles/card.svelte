<script lang="ts">
  type Props = {
    title: string;
    date: string;
    link: string;
    category?: string;
    image: { src: string; width: number; height: number };
    featured?: boolean;
    class?: string;
  };
  let { title, date, link, category, image, featured = false, class: clazz }: Props = $props();

  const formattedDate = new Date(date).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Clamp aspect ratio to a maximum of 4/3
  const maxAspect = 4 / 3;
  const aspect = image.width / image.height;
  const clampedAspect = aspect < maxAspect ? maxAspect : aspect;
</script>

<article class="bg-m-mantle shadow p-4 flex flex-col h-full {clazz}">
  <a href={link} class="block h-full">
    <div class="w-full" style="aspect-ratio: {clampedAspect};">
      <img src={image.src} alt={title} class="object-cover w-full h-full" />
    </div>

    <div class="mt-4 flex flex-col flex-grow">
      {#if category}
        <span class="text-sm text-m-mantle-subtext0">{category}</span>
      {/if}

      <time class="text-xs text-m-mantle-subtext1 mt-1">{formattedDate}</time>

      <h2 class={(featured ? "text-3xl font-bold mt-2 flex-grow" : "text-xl font-bold mt-2 flex-grow") + " text-m-mantle-text"}>
        {title}
      </h2>
    </div>
  </a>
</article>
