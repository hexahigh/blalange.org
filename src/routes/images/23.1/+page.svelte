<script>
  import Nav from "../../Nav.svelte";
  import ImagesNav from "$lib/components/images-nav.svelte";

  import imagesData from "./images.json";

  let images = imagesData.slice(1); // Exclude the first object with hqUrl and lqUrl

  function handleImageLoad(index) {
    images[index].loaded = true;
  }

  // Distribute the images as evenly as possible into 4 columns
  let columns = [[], [], [], []];
  for (let i = 0; i < images.length; i++) {
    columns[i % columns.length].push(images[i]);
  }
</script>

<Nav />
<ImagesNav />

<div class="main">
  <div class="row">
    {#each columns as column, columnIndex}
      <div class="column">
        {#each column as image, index}
          <img
            class="image-item"
            src={`${imagesData[0].hqUrl}${image.src}`}
            alt="High Resolution Image"
          />
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .main {
    background-color: #ffffff;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  /* Create four equal columns that sits next to each other */
  .column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
  }
</style>
