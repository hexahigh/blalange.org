<script lang="ts">
  import Metatags from "$root/src/lib/components/metatags.svelte";
  import Stripe from "$lib/components/svg/stripe.svelte";
  import Vipps from "$root/src/lib/components/svg/vipps.svelte";
</script>

<Metatags title="Støtt Blålange" description="Doner til Blålange" />

<div class="font-['IBM_Plex_Sans'] bg-base-100 text-base-content">
  <div class="overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Heading -->
      <h1 class="text-4xl sm:text-5xl font-semibold">Støtt Blålange</h1>

      <!-- Intro Paragraph -->
      <p class="text-lg sm:text-xl leading-relaxed">
        Blålange drives av frivillige som brenner for å lage innhold og arrangementer som styrker kreativiteten for
        ungdommen. Vi gjør dette fordi vi elsker det, men utstyr og drift koster penger.
        <br /><br />
        Hvis du liker det vi lager, setter vi utrolig stor pris på en donasjon. Hver krone går tilbake til å lage bedre innhold,
        flere og bedre arrangementer og holde Blålange levende for alle.
        <br /><br />
        Du kan donere via Vipps/Stripe, kjøpe fra vår nettbutikk eller sende direkte til vår bankkonto. Alle bidrag er med
        på å gjøre en forskjell!
        <br /><br />
        Tusen takk for at du støtter Blålange! 💙
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0">
        <a
          href="#donate"
          target="_blank"
          rel="noopener noreferrer"
          style="--btn-color: #ff5b24;"
          class="btn btn-disabled text-lg w-60 text-center py-4 px-6 text-white rounded-md"
        >
          Doner via <Vipps class="h-4" />
        </a>
        <a
          href="https://donate.stripe.com/4gMdR96ArbDlfCyaAJcIE00"
          target="_blank"
          rel="noopener noreferrer"
          style="--btn-color: #635bff;"
          class="btn text-lg text-white w-60 text-center py-4 px-6 rounded-md"
        >
          Doner via <Stripe style="fill-rule: evenodd; clip-rule: evenodd; fill: #fff;" class="h-6" />
        </a>
        <a
          href="https://shop.blalange.org"
          target="_blank"
          class="btn btn-primary text-lg w-60 text-center py-4 px-6 rounded-md text-primary-content"
        >
          Kjøp fra nettbutikk
        </a>
      </div>

      <!-- Alternative payment info -->
      <p class="text-lg leading-relaxed">
        Alternativt send direkte fra Vipps til <span class="font-medium">967428</span>
        <br />
        Eller til banknummer <span class="font-medium">10806882807</span>.
        <br />
        Ønsker du å donere fysisk utstyr, tjenester eller store beløp, send oss en e-post på
        <a
          href="mailto:contact@blalange.org?subject=[Donasjon]"
          class="text-primary underline font-medium"
          aria-label="Send e-post til contact@blalange.org">contact@blalange.org</a
        >
      </p>
    </div>
  </div>
</div>
