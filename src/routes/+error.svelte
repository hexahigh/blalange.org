<script>
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";

  let error = $page.error;
  let status = $page.status;

  console.error(error);

  const statusArray = Array.from(String(status));
  const spanIds = statusArray.map((_, i) => `span-${i}`);

  let errorHeader = "Something went wrong";
  let errorText = "An unexpected error occurred. Please try again later.";

  switch (status) {
    case 401:
      errorHeader = "Du er ikke innlogget";
      errorText = "Du må logge inn for å få tilgang til denne siden.";
      break;
    case 403:
      errorHeader = "Du har ikke tilgang";
      errorText = "Du har ikke tilgang til denne siden.";
      break;
    case 404:
      errorHeader = "Siden ble ikke funnet";
      errorText = "Siden du leter etter finnes tydeligvis ikke.";
      break;
    case 406:
      errorHeader = "Ikke akseptert";
      errorText = "Det her er helt uakseptabelt! Vi kunne ikke returnere det nettleseren din ba om.";
      break;
    case 410:
      errorHeader = "Borte for godt";
      errorText = "Siden du leter etter har blitt fjernet permanent.";
      break;
    case 418:
      errorHeader = "Jeg er en tekopp";
      errorText = "Jeg er en tekopp, ikke en kaffekopp! ☕️";
      break;
    case 429:
      errorHeader = "Woah, ro deg ned!";
      errorText = "Du har sendt for mange forespørsler på kort tid. Vennligst prøv igjen senere.";
      break;
    case 451:
      errorHeader = "Utilgjengelig av juridiske årsaker";
      errorText = "Siden du leter etter er utilgjengelig av juridiske årsaker.";
      break;
    case 500:
      errorHeader = "Intern serverfeil";
      errorText = "Noe gikk galt på vår side. Vennligst prøv igjen senere.";
      break;
    default:
        errorHeader = "uhhhh...";
        errorText = "Feilen du støttet på er såpass uvanlig at vi ikke har en egen feilmelding for den. Prøv igjen senere?";
      break;
  }
</script>

<div class="relative w-full min-h-screen flex justify-center flex-col">
  <section class="bg-base-100">
    <div class="py-8 px-4 mx-auto max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
      <div class="mx-auto max-w-(--breakpoint-sm) text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-m-secondary">
          {#each statusArray as s, i}
            <span id={spanIds[i]} in:fly={{ duration: 300, delay: i * 50 }}>
              {s}
            </span>
          {/each}
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text text-base-content md:text-4xl">
          {errorHeader}
        </p>
        <p class="mb-4 text-lg font-light text-base-content/70">
          {errorText}
        </p>
        <a
          href="/"
          class="inline-flex text-m-secondary-text bg-m-secondary hover:bg-m-secondary/80 focus:ring-4 focus:outline-none focus:ring-m-secondary/45 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >Tilbake til hjemsiden</a
        >
      </div>
    </div>
  </section>
</div>
