<script>
  import paypal from "$lib/svg/paypal1.svg";
  import opencollective from "$lib/svg/openCollective_2021.svg";
  import donations from "$lib/json/donations.json";
  import * as m from "$lib/paraglide/messages.js";

  let cost = 2157;

  let donated = $state(0);
  for (let i = 0; i < donations.length; i++) {
    donated += donations[i].amount;
  }

  // Sort the donations by amount in descending order
  let sortedDonations = donations.sort((a, b) => b.amount - a.amount);

  let percentage = (donated / cost) * 100;

  async function donate(service) {
    if (service == "paypal") {
      window.open("https://www.paypal.com/donate/?hosted_button_id=N2US62KK87SB4");
    }
    if (service == "openCollective") {
      window.open("https://opencollective.com/blalange");
    }
  }
</script>

<div class="text-center max-w-4xl mx-auto mt-10 mb-4">
  <h3 class="text-3xl font-bold mb-4 krona">{m.donations_donate()}</h3>
  <p class="whitespace-break-spaces">{m.donations_donateText({ donated, cost })}</p>

  <div class="bg-gray-200 rounded-full dark:bg-gray-700">
    <div
      class="bg-blue-600 text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
      style="width: {percentage}%"
    >
      {donated}/{cost}
    </div>
  </div>

  <h4 class="text-2xl">{m.donations_donateNow()}</h4>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div class="flex flex-col sm:flex-row justify-center items-center gap-16">
    <img
      class="max-w-[90%] sm:w-64 h-64 hover:scale-110 transform transition duration-500 no-drag"
      draggable="false"
      src={opencollective}
      alt="OpenCollective"
      onclick={() => donate("openCollective")}
    />
  </div>

  <h3 class="text-3xl font-bold mb-4 krona">{m.donations_leaderboard_header()}</h3>
  <p>{m.donations_leaderboard_text()}</p>
  <ul class="list-none p-0">
    {#each sortedDonations as donation, index}
      <li class="py-2 border-b border-gray-200">
        <span class="mr-2">{index + 1}. </span>
        <span class:rimword={index === 0}>{donation.name}</span>
        <span class="ml-2"> - {donation.amount.toFixed(2)} NOK</span>
      </li>
    {/each}
  </ul>
</div>
