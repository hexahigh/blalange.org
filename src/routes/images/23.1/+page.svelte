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
    <div class="image-container">
        {#each images as image, index}
            {#if image.loaded}
                <img
                    class="image-item"
                    src={`${imagesData[0].hqUrl}${image.src}`}
                    alt="High Resolution Image"
                />
            {:else}
                <img
                    class="image-item"
                    src={`${imagesData[0].lqUrl}${image.src}`}
                    alt="Low Resolution Image"
                    on:load={() => handleImageLoad(index)}
                />
            {/if}
        {/each}
    </div>
</div>

<style>
    .main {
        background-color: #ffffff;
    }

    .image-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }

    .image-item {
        flex: 1 0 200px;
        max-width: 100%;
    }
</style>
