<script>
  import Donations from "$lib/json/donations.json";

  // Sort the donations by amount in descending order
  let sortedDonations = Donations.sort((a, b) => b.amount - a.amount);
</script>

<div class="text-center max-w-4xl mx-auto mt-10 mb-4 pb-10 border-b-2 border-dashed">
  <h3 class="text-3xl font-bold mb-4">Topp sponsorere</h3>
  <ul class="list-none p-0">
    {#each sortedDonations as donation, index}
      <li class="py-2 border-b border-gray-200">
        <span class="mr-2">{index + 1}. </span>
        <span>{donation.name}</span>
        <span class="ml-2"> - {donation.amount.toFixed(2)} NOK</span>
      </li>
    {/each}
  </ul>
</div>
