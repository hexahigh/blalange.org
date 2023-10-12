<script>
    import { RatingComment } from 'flowbite-svelte';
    let comment1 = {
      id: '1',
      user: {
        name: 'Hermann Roos',
        img: {
          src: '/img/people/herremann.jpg',
          alt: 'Hermann Roos'
        },
        joined: 'Joined on Juli 2009'
      },
      total: 5,
      rating: 5,
      heading: 'Tissen min ble så mye lengre!',
      address: 'Krydderland',
      datetime: '2023-10-12'
    };
    let comment1text = "Tissen min vokste fra 2mm til hele 5mm!! 10/10"
  </script>
  
  <RatingComment {comment1} helpfullink="/" abuselink="/">
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">{comment1text}</p>
    <a href="/" class="block mb-5 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"> Read more </a>
    <svelte:fragment slot="evaluation">69,000 people found this helpful</svelte:fragment>
  </RatingComment>