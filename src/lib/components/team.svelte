<script>
  import { Card, Listgroup, Avatar } from "flowbite-svelte";
  let list = [
    {
      img: { src: "/img/people/simon.jpg", alt: "Simon Bråten" },
      name: "Simon Bråten",
      email: "hexahigh0@gmail.com",
      position: "Hovedutvikler",
    },
    {
      img: { src: "/img/people/herremann.jpg", alt: "Hermann Roos" },
      name: "Hermann Roos",
      email: "hermann1509@gmail.com",
      position: "Hoveddesigner",
    },
  ];
</script>

<div class="flex justify-center items-center">
  <div class="w-96 content-center">
    <Card padding="xl" size="md">
      <div class="flex justify-between items-center mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Team
        </h5>
        <p class="text-sm">Disse talenterte folkene jobber på Kukfest</p>
      </div>
      <Listgroup items={list} let:item class="border-0 dark:!bg-transparent spac">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <p
              class="text-sm font-medium text-gray-900 truncate dark:text-white"
            >
              {item.name}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {item.email}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            {item.position}
          </div>
        </div>
      </Listgroup>
    </Card>
  </div>
</div>
