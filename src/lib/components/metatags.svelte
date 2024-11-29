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

  interface Props {
    title?: string;
    description?: string;
    url?: string;
    images?: OpenGraphImage[];
  }

  let {
    title = "",
    description = "",
    url = $bindable(""),
    images = [
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
  ]
  }: Props = $props();

  // Check if url start with http:// or https://
  const urlStartsWithHttp = (url: string): boolean => url.startsWith("https://") || url.startsWith("http://");

  if (!urlStartsWithHttp(url)) {
    if (url.startsWith("/")) {
      url = "https://blalange.org" + url;
    } else {
      url = "https://blalange.org" + "/" + url;
    }
  }
</script>

<MetaTags
  {title}
  titleTemplate="%s | Blålange"
  {description}
  canonical={url}
  openGraph={{
    url: url,
    title: title,
    description: description,
    images: images,
    siteName: "Blålange",
  }}
/>
