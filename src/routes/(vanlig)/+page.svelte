<script lang="ts">
  //TODO: Fix thumb types
  /*@ts-ignore*/
  import frontImage from "$lib/img/misc/DSC05731.jpg?enhanced&w=5472;2560;1920;640";
  /*@ts-ignore*/
  import creativityImage from "$lib/img/misc/DSC05954.jpg?enhanced&w=5472;2560;1920;640";
  /*@ts-ignore*/
  import videoThumb from "$lib/img/misc/playback.jpg?enhanced&w=1280;640";
  /*@ts-ignore*/
  import codeThumb from "$lib/img/misc/programmering.png?enhanced&w=2560;1920;640";
  /*@ts-ignore*/
  import designThumb from "$lib/img/misc/vektor.png?enhanced&w=2560;1920;640";
  /*@ts-ignore*/
  import musicThumb from "$lib/img/misc/DSC05935.png?enhanced&w=3080;2560;1920;640";

  import { MetaTags } from "svelte-meta-tags";
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import type { MouseEventHandler } from "svelte/elements";

  const texts = ["Ungdommer", "Alle", "De som vil lære", "De som vil dele", "De som vil skape", "De som vil utforske"];
  // Start in a random position
  let textIndex = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      let textIndexValue = textIndex + 1;
      if (textIndexValue >= texts.length) {
        textIndexValue = 0;
      }
      textIndex = textIndexValue;
    }, 1500);

    return () => clearInterval(interval); // Cleanup on destroy
  });

  const offerings = [
    {
      id: "video",
      title: "Videoproduksjon",
      image: videoThumb,
      alt: "Videoproduksjon",
      modal: true,
      description:
        "Vi hjelper deg med alt innen videoproduksjon; fra planlegging og opptak til redigering og ferdig video. Du kan også leie utstyr hos oss. Vi tilpasser oss dine behov, enten det er et lite prosjekt eller en større produksjon.",
    },
    {
      id: "programming",
      title: "Programmering",
      image: codeThumb,
      alt: "Programmering",
      modal: true,
      description:
        "Vi tilbyr hjelp med programmering og utvikling av prosjekter; både programvare og fysiske løsninger. Du får tilgang til ulike hardware-plattformer og kan få veiledning og brainstorming med erfarne utviklere. Vi kan også bidra med hjelp av bygging og testing av den fysiske delen.",
    },
    {
      id: "design",
      title: "Vektordesign",
      image: designThumb,
      alt: "Vektordesign",
      modal: true,
      description:
        "Vi hjelper deg med vektordesign, enten du trenger hjelp med selve designet eller hvordan det skal brukes videre. Vi finner gode løsninger sammen, og kan bistå med alt fra idé til ferdige produkter som klær, klistremerker og annet trykk.",
    },
    {
      id: "music",
      title: "Musikkproduksjon",
      image: musicThumb,
      alt: "Musikkproduksjon",
      modal: true,
      description:
        "Vi tilbyr hjelp med musikkproduksjon, både når det gjelder bruk av utstyr og kreative tips underveis. I tillegg kan vi hjelpe med distribusjon av musikken din, slik at du får delt musikken på alle de store platformene.",
    },
  ];

  let dialogs = {};
  function openModal(id) {
    const d = dialogs[id];
    if (d && typeof d.showModal === "function") d.showModal();
  }

  let offeringButtons: HTMLElement[] = [];

  const tilt = 7;

  // now an actual named function; it operates on the event's currentTarget (the button)
  function onHover(ev: MouseEvent) {
    if (!tilt) return;
    const target = ev.currentTarget as HTMLElement;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const x = (ev as MouseEvent).clientX - rect.left;
    const y = (ev as MouseEvent).clientY - rect.top;

    target.style.setProperty("--drop-x", `${x}px`);
    target.style.setProperty("--drop-y", `${y}px`);

    const width = target.offsetWidth;
    const height = target.offsetHeight;

    // center of element in viewport coords
    const cX = rect.left + width / 2;
    const cY = rect.top + height / 2;

    const mX = (ev as MouseEvent).clientX - cX;
    const mY = (ev as MouseEvent).clientY - cY;

    const rY = ((tilt * mX) / (width / 2)).toFixed(2);
    const rX = ((-1 * (tilt * mY)) / (height / 2)).toFixed(2);

    target.style.setProperty("--rot-x", `${rX}deg`);
    target.style.setProperty("--rot-y", `${rY}deg`);
  }

  // reset when the mouse leaves the button
  function onLeave(ev: MouseEvent) {
    const target = ev.currentTarget as HTMLElement;
    if (!target) return;

    if (tilt) {
      target.style.setProperty("--drop-x", "0");
      target.style.setProperty("--drop-y", "0");
      target.style.setProperty("--rot-x", "0");
      target.style.setProperty("--rot-y", "0");
    }
  }
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
        width: 450,
        height: 450,
        alt: "Blålange logo",
      },
    ],
    siteName: "Blålange",
  }}
/>

<main class="space-y-24 pb-8 bg-base-100 text-base-content">
  <!-- Hero -->
  <section class="relative h-[50vw] max-h-[600px] overflow-hidden">
    <enhanced:img
      src={frontImage}
      sizes="100vw"
      alt="Ungdom i verksted"
      class="absolute inset-0 w-full h-full object-cover contrast-[0.8]"
    />
    <div class="absolute inset-0 bg-black/40"></div>
    {#key textIndex}
      <h1
        class="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-5xl md:text-6xl font-extrabold text-center"
      >
        Blålange er for
        <span class="block text-accent mt-2 w-max" transition:fly={{ duration: 1000, y: 50 }}>{texts[textIndex]}</span>
      </h1>
    {/key}
  </section>

  <!-- Two-column intro -->
  <section class="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h2 class="text-4xl font-semibold">Kreativitet kan koste</h2>
      <p class="text-lg leading-relaxed font-medium">
        Målet til Blålange er dermed å lage felles tilgang til utstyr, kunnskap og sammarbeid for alle ungdommer som
        ønsker å utforske medieproduksjon.
        <br /><br />
        Med å ha en felles plass alle unge kan låne og lære fra håper vi å kunne inspirere flere til å prøve og mestre seg
        innen kreative midler som video, musikk, digitalt design og programmering.
      </p>
    </div>
    <div>
      <enhanced:img
        src={creativityImage}
        sizes="100vw"
        alt="Creativity-bilde"
        class="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-secondary text-primary-content flex w-full">
    <div class="container mx-auto px-6 md:px-0 py-16 text-center space-y-6">
      <p class="text-2xl md:text-3xl font-semibold">
        Men for å nå målet vårt trenger vi støtte,<br />
        lær hvordan du kan hjelpe og donere:
      </p>
      <a href="/donate" class="btn btn-primary btn-lg w-[159,5px] h-[30px]"> Støtt kreativiten </a>
    </div>
  </section>

  <!-- Offerings -->
  <section class="container mx-auto px-6 md:px-0 space-y-12">
    <h2 class="text-4xl font-bold text-center text-base-content">Vi tilbyr</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-primary-content">
      {#each offerings as o, i (o.id)}
        <button
          type="button"
          class="bg-primary rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer card"
          onmousemove={onHover}
          onmouseleave={onLeave}
          bind:this={offeringButtons[i]}
          onclick={() => (o.modal ? openModal(o.id) : null)}
          aria-haspopup={o.modal ? "dialog" : undefined}
        >
          <enhanced:img
            src={o.image}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            alt={o.alt}
            class="h-56 w-full object-cover"
          />
          <div class="p-6 flex-1 flex items-end">
            <h3 class="text-xl font-semibold">{o.title}</h3>
          </div>
        </button>

        {#if o.modal}
          <dialog bind:this={dialogs[o.id]} class="modal modal-bottom sm:modal-middle">
            <div class="modal-box bg-secondary text-secondary-content">
              <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost btn-primary absolute right-2 top-2">✕</button>
              </form>
              <h3 class="text-lg font-bold">{o.title}</h3>
              <p class="py-4">{o.description}</p>
            </div>
            <form method="dialog" class="modal-backdrop"><button>lukk</button></form>
          </dialog>
        {/if}
      {/each}
    </div>
  </section>
</main>

<style>
  .card {
    transition:
      transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1),
      box-shadow 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
    transform-origin: center center;
    --rot-x: 0;
    --rot-y: 0;
    --drop-x: 0;
    --drop-y: 0;
  }

  .card:hover {
    transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.05);
  }

  .card:active {
    transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(0.95);
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.45);
    animation: backdrop-fade 320ms ease;
  }

  dialog .modal-box {
    transform-origin: center center;
  }

  dialog[open] .modal-box {
    animation: modal-in 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes backdrop-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes modal-in {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
