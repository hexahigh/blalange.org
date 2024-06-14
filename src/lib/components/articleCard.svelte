<!--
@component articleCard
@description This is a reusable card component for displaying articles.
@prop {string} image - The URL of the image to display in the card.
@prop {string} title - The title of the article.
@prop {string} description - A brief description of the article.
@prop {string} link - The URL to navigate to when the card is clicked.
-->

<script>
  export let image;
  export let title;
  export let description;
  export let link;
  export let date;

  function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleString()
  }
</script>

<div
  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
>
  <a href={link}>
    <a href={link}>
      <img class="rounded-t-lg object-cover w-full h-1/2" src={image} alt="" />
    </a>
    <div class="p-5 h-1/2 flex flex-col">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h5>
      <p class="text-gray-500">{formatDate(date)}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a
        href={link}
        class="inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Les mer
        <svg
          class="w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </a>
</div>
