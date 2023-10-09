<script>
    import Nav from "../../Nav.svelte";
    import ImagesNav from "$lib/components/images-nav.svelte";

    import imagesData from "./images.json";

    let images = imagesData.slice(1); // Exclude the first object with hqUrl and lqUrl
    let lowResImagesLoaded = false;

    function handleLowResImageLoad(index) {
        images[index].loaded = true;

        // Check if all low-resolution images have finished loading
        const allLowResImagesLoaded = images.every((image) => image.loaded);
        if (allLowResImagesLoaded) {
            lowResImagesLoaded = true;
        }
    }

    function handleHighResImageLoad(index) {
        images[index].loaded = true;
    }
</script>

<Nav />
<ImagesNav />

<div class="main">
    <div class="image-container">
        {#each images as image, index}
            <div class="image-item">
                {#if image.loaded}
                    <img
                        src={`${imagesData[0].hqUrl}${image.src}`}
                        alt="High Resolution Image"
                    />
                {:else if lowResImagesLoaded}
                    <img
                        src={`${imagesData[0].hqUrl}${image.src}`}
                        alt="High Resolution Image"
                        on:load={() => handleHighResImageLoad(index)}
                    />
                {:else}
                    <img
                        src={`${imagesData[0].lqUrl}${image.src}`}
                        alt="Low Resolution Image"
                        on:load={() => handleLowResImageLoad(index)}
                    />
                {/if}
            </div>
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
