<script>
    import Countdown from "./countdown.svelte";
    import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
    title="Kukfest"
    titleTemplate="%s | Kukfest"
    description="Kukfest har masse kuk"
    canonical="https://kukfest.eu"
    openGraph={{
        url: "https://www.url.ie/a",
        title: "Kukfest",
        description: "Mye kuk",
        images: [
            {
                url: "https://www.example.ie/og-image-01.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },],
        siteName: "Kukfest",
    }}
/>

<svelte:head />

<Countdown />
