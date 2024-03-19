<script>
  import paypal from "$lib/svg/paypal1.svg";

  let cost = 2000;

  let donations = [
    {
      name: "Anon",
      amount: 7.93,
    }
  ]

  let donated = 0;
  for (let i = 0; i < donations.length; i++) {
    donated += donations[i].amount;
  }

  let percentage = (donated / cost) * 100;

  async function donate(service) {
    if (service == "paypal") {
      window.open("https://www.paypal.com/donate/?hosted_button_id=N2US62KK87SB4");
    }
    if (service == "patreon") {
      window.open("https://www.patreon.com/boofdev");
    }
  }

</script>

<div class="text-center max-w-4xl mx-auto mt-10 mb-4 border-b-2 border-dashed">
  <h3 class="text-3xl font-bold mb-4">Doner</h3>
  <p>
    Vi mister mye penger av Blålange festivalen, du kan hjelpe oss med å donere!
  </p>
  <p>
    Folk har donert {donated} kroner, Blålange festivalen har kostet oss {cost} kroner.
  </p>

  <div class="bg-gray-200 rounded-full dark:bg-gray-700">
    <div
      class="bg-blue-600 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
      style="width: {percentage}%"
    >
      {donated}/{cost}
    </div>
  </div>

  <h4 class="text-2xl">Doner nå!</h4>
  <div class="flex justify-center gap-16">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img class="w-64 h-64 hover:scale-110 transform transition duration-500 no-drag" draggable="false" src={paypal} alt="Paypal" on:click={() => donate("paypal")} />
  </div>
</div>

