<!--
@component metatags
@description This is a wrapper component for svelte-meta-tags.
@prop {string} title - The title of the page.
@prop {string} description - The description of the page.
@prop {string} url - The URL of the page.
@prop {OpenGraphImage[]} images - The images to use for the page. If unset the logo will be used.
-->

<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import logo from "$lib/img/favicon.svg?url";
  import logoPng from "$lib/img/favicon.png?url";

  interface OpenGraphImage {
    url: string;
    secureUrl?: string;
    type?: string;
    width?: number;
    height?: number;
    alt?: string;
  }

  export let title: string = "";
  export let description: string = "";
  export let url: string = "";
  export let images: OpenGraphImage[] = [
    {
      url: logo,
      type: "image/svg+xml",
      alt: "Blålange logo",
    },
    {
      url: logoPng,
      type: "image/png",
      alt: "Blålange logo",
    },
  ];
</script>

<MetaTags
  {title}
  titleTemplate="%s | Blålange"
  {description}
  canonical={"https://blalange.org" + url}
  openGraph={{
    url: "https://blalange.org" + url,
    title: title,
    description: description,
    images: images,
    siteName: "Blålange",
  }}
/>
