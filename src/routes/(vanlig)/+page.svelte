<script>
  import frontImage from "$lib/img/misc/DSC05731.jpg?enhanced&w=5472;2560;1920;640";
  import creativityImage from "$lib/img/misc/DSC05676.jpg?enhanced&w=5472;2560;1920;640";
  import videoThumb from "$lib/img/misc/playback.jpg?enhanced&w=1280;640";
  import codeThumb from "$lib/img/misc/programmering.png?enhanced&w=2560;1920;640";
  import designThumb from "$lib/img/misc/DSC05676.jpg?enhanced&w=5472;2560;1920;640";
  import musicThumb from "$lib/img/misc/DSC04972.jpg?enhanced&w=5472;2560;1920;640";

	import { MetaTags } from 'svelte-meta-tags';
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";

  let textIndex = $state(0);
  const texts = ["Ungdommer", "Alle", "De som vil lære", "De som vil dele", "De som vil skape", "De som vil utforske"];

  onMount(() => {
    const interval = setInterval(() => {
      let prevIndex = textIndex;
      // Pick a semi-random index from the texts array.
      while (textIndex === prevIndex) {
        textIndex = Math.floor(Math.random() * texts.length);
      }
    }, 1500);

    return () => clearInterval(interval); // Cleanup on destroy
  });
</script>

<MetaTags
  title="Blålange"
  titleTemplate="%s | Blålange"
  description="Blålange er en norsk forening som jobber for å gi ungdommer tilgang til kreativt utstyr og kunnskap."
  canonical="https://blalange.org/"
  openGraph={{
    url: "https://blalange.org",
    title: "Blålange | Blålange",
    description: "Blålange er en norsk forening som jobber for å gi ungdommer tilgang til kreativt utstyr og kunnskap.",
    images: [
      {
        url: "https://blalange.org/img/favicon.png",
        width: 300,
        height: 300,
        alt: "Blålange logo",
      },
    ],
    siteName: "Blålange",
  }}
/>

<main class="space-y-24 pb-8 bg-m-base">
  <!-- Hero -->
  <section class="relative h-[50vw] max-h-[600px] overflow-hidden">
    <enhanced:img src={frontImage} sizes="100vw" alt="Ungdom i verksted" class="absolute inset-0 w-full h-full object-cover contrast-[0.8]" />
    <div class="absolute inset-0 bg-black/40"></div>
    {#key textIndex}
      <h1
        class="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-5xl md:text-6xl font-extrabold text-center"
      >
        Blålange er for
        <span class="block text-m-accent mt-2 w-max" transition:fly={{ duration: 1000, y: 50 }}>{texts[textIndex]}</span>
      </h1>
    {/key}
  </section>

  <!-- Two-column intro -->
  <section
    class="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-m-base-text"
  >
    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Kreativitet kan koste</h2>
      <p class="text-lg leading-relaxed">
        Målet til Blålange er dermed å lage felles tilgang til utstyr, kunnskap og samarbeid for alle ungdommer som
        ønsker å utforske medieproduksjon.
      </p>
      <p class="text-lg leading-relaxed">
        Med å ha en felles plass alle unge kan låne og lære fra håper vi å kunne inspirere flere til.
      </p>
    </div>
    <div>
      <enhanced:img src={creativityImage} sizes="100vw" alt="Creativity-bilde" class="w-full h-auto rounded-lg shadow-lg object-cover" />
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-m-primary text-m-primary-text">
    <div class="container mx-auto px-6 md:px-0 py-16 text-center space-y-6">
      <p class="text-2xl md:text-3xl font-semibold">
        Men for å nå målet vårt trenger vi støtte,<br />
        bli med eller lær hvordan du kan hjelpe og donere:
      </p>
      <a
        href="/støtt"
        class="inline-block transition rounded-full px-8 py-4 text-lg font-medium hover:scale-110 bg-m-accent hover:bg-m-accent/50 text-m-accent-text"
      >
        Støtt kreativiten
      </a>
    </div>
  </section>

  <!-- Offerings -->
  <section class="container mx-auto px-6 md:px-0 space-y-12">
    <h2 class="text-4xl font-bold text-center text-m-base-text">Vi tilbyr</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-m-accent-text">
      <div
        class="bg-m-accent rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-110 transition-transform"
      >
        <enhanced:img src={videoThumb} sizes="100vw" alt="Videoproduksjon" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Videoproduksjon</h3>
        </div>
      </div>

      <div
        class="bg-m-accent rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-110 transition-transform"
      >
        <enhanced:img src={codeThumb} sizes="100vw" alt="Programmering" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Programmering</h3>
        </div>
      </div>

      <div
        class="bg-m-accent rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-110 transition-transform"
      >
        <enhanced:img src={designThumb} sizes="100vw" alt="Vektordesign" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Vektordesign</h3>
        </div>
      </div>
      <div
        class="bg-m-accent rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-110 transition-transform"
      >
        <enhanced:img src={musicThumb} sizes="100vw" alt="Musikkproduksjon" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Musikkproduksjon</h3>
        </div>
      </div>
    </div>
  </section>
</main>
