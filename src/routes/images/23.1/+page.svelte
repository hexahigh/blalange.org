<script>
    import Nav from "../../Nav.svelte";
    import ImagesNav from "$lib/components/images-nav.svelte";

    import imagesData from "./images.json";

    let images = imagesData.slice(1); // Exclude the first object with hqUrl and lqUrl

    function handleImageLoad(index) {
        images[index].loaded = true;
    }
</script>

<Nav />
<ImagesNav />

<div class="main">
    {#each images as image, index}
        {#if image.loaded}
            <img
                src={`${imagesData[0].hqUrl}${image.src}`}
                alt="High Resolution Image"
            />
        {:else}
            <img
                src={`${imagesData[0].lqUrl}${image.src}`}
                alt="Low Resolution Image"
                on:load={() => handleImageLoad(index)}
            />
        {/if}
    {/each}
</div>

<style>
    .main {
        background-color: #ffffff;
    }

    .main {
        display: flex;
    }

    .main img {
        margin-top: 8px;
        vertical-align: middle;
        width: 25%;
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
