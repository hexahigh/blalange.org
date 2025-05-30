<script>
  import kreativImage from '$lib/img/misc/DSC05676.JPG?url';
  import produktImage from '$lib/img/misc/DSC05676.JPG?url';
  import videoThumb from '$lib/img/misc/DSC05676.JPG?url';
  import codeThumb from '$lib/img/misc/DSC05676.JPG?url';
  import designThumb from '$lib/img/misc/DSC05676.JPG?url';
</script>

<main class="space-y-24">
  <!-- Hero -->
  <section class="relative h-[50vw] max-h-[600px] overflow-hidden">
    <img
      src="{kreativImage}"
      alt="Ungdom i verksted"
      class="absolute inset-0 w-full h-full object-cover contrast-[0.8]"
    />
    <div class="absolute inset-0 bg-black/40"></div>
    <h1
      class="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-5xl md:text-6xl font-extrabold text-center"
    >
      Blålange er for
      <span class="block text-b-cyan mt-2">Ungdommen</span>
    </h1>
  </section>

  <!-- Two-column intro -->
  <section class="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Kreativitet kan koste</h2>
      <p class="text-lg leading-relaxed">
        Målet til Blålange er dermed å lage felles tilgang til utstyr, kunnskap og samarbeid for alle ungdommer som ønsker å utforske medieproduksjon.
      </p>
      <p class="text-lg leading-relaxed">
        Med å ha en felles plass alle unge kan låne og lære fra håper vi å kunne inspirere flere til.
      </p>
    </div>
    <div>
      <img
        src="{produktImage}"
        alt="Produkt-bilde"
        class="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-b-maastricht text-white">
    <div class="container mx-auto px-6 md:px-0 py-16 text-center space-y-6">
      <p class="text-2xl md:text-3xl font-semibold">
        Men for å nå målet vårt trenger vi støtte,<br />
        bli med eller lær hvordan du kan hjelpe og donere:
      </p>
      <a
        href="/støtt"
        class="inline-block bg-b-cyan hover:bg-b-cyan-dark transition rounded-full px-8 py-4 text-lg font-medium"
      >
        Støtt kreativiten
      </a>
    </div>
  </section>

  <!-- Offerings -->
  <section class="container mx-auto px-6 md:px-0 space-y-12">
    <h2 class="text-4xl font-bold text-center">Vi tilbyr</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
        <img src="{videoThumb}" alt="Videoproduksjon" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Videoproduksjon</h3>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
        <img src="{codeThumb}" alt="Programmering" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Programmering</h3>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
        <img src="{designThumb}" alt="Vektordesign" class="h-48 w-full object-cover" />
        <div class="p-6 flex-1 flex items-end">
          <h3 class="text-xl font-semibold">Vektordesign</h3>
        </div>
      </div>
    </div>
  </section>
</main>
