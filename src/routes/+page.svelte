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

<div class="bg-fixed bg-no-repeat bg-cover text-white text-center" style="background-image: url(/img/bg1.png);">
    <h2 class="text-3xl">Hva er kukfest?</h2>
    <p class="text-xl">Kukfest er en liten festival som skjer på en minecraft server kjørt av noen venner. Den startet i 2023 og blir større for vært år. Det er minigames, et talentshow og mange andre gøye aktiviteter. Akkurat nå så er den eneste måten å bli med er å bli invitert.</p>
</div>
<div>
    <div class="text-center">
        <h2 class="text-3xl">Watch our epic trailer</h2>
    </div>
    <div class="mt-5 justify-center flex">
        <video class="w-96 rounded border border-black" controls>
            <source src="/img/Kukfest 23.1 8K Trailer 1.webm" type="video/webm">
        </video>
    </div>
</div>