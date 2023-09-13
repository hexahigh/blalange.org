<script>
    import Countdown from "./countdown.svelte";
    import Nav from "./Nav.svelte";
    import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
    title="Kukfest"
    titleTemplate="%s | Kukfest"
    description="Kukfest har masse kuk"
    canonical="https://kukfest.eu"
    openGraph={{
        url: "https://kukfest.eu",
        title: "Kukfest",
        description: "Mye kuk",
        images: [
            {
                url: "https://kukfest.eu/img.jpg",
                alt: "Kukfest logo",
            },
        ],
        siteName: "Kukfest",
    }}
/>
<svelte:head>

</svelte:head>

<Nav />

<Countdown />