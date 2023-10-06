<script>
    import Nav from "../../Nav.svelte";
    import ImagesNav from "../../components/images-nav.svelte";
</script>

<Nav />
<ImagesNav />

<div class="main">
    <div class="row">
        <div class="column">
            <img src="/img/image-archive/23.1/2023-09-10_02.22.23.png">
            <img src="/img/image-archive/23.1/2023-09-11_18.41.28.png">
            <img src="/img/image-archive/23.1/huge_2023-09-25_18.17.39.png">
            <img src="/img/image-archive/23.1/huge_2023-09-25_18.18.53.png">
            <img src="/img/image-archive/23.1/huge_2023-09-25_18.19.16.png">
        </div>
        <div class="column">
            <img src="/img/image-archive/23.1/23.1/2023-09-13_17.22.52.png">
            <img src="/img/image-archive/23.1/23.1/2023-09-13_17.24.17.png">
            <img src="/img/image-archive/23.1/huge_2023-09-25_18.19.50.png">
            <img src="/img/image-archive/23.1/huge_2023-09-25_18.20.14.png">
        </div>
        <div class="column">
            <img src="/img/image-archive/23.1/23.1/2023-09-13_17.24.41.png">
            <img src="/img/image-archive/23.1/23.1/2023-09-16_17.23.42.png">
            <img src="/img/image-archive/23.1/huge_2023-09-25_18.20.30.png">
            <img src="/img/image-archive/23.1/huge_2023-10-02_12.26.04.png">
        </div>
        <div class="column">
            <img src="/img/image-archive/23.1/23.1/2023-09-16_17.23.53.png">
            <img src="/img/image-archive/23.1/huge_2023-10-06_13.57.11.png">
            <img src="/img/image-archive/23.1/huge_2023-10-06_13.57.29.png">
            <img src="/img/image-archive/23.1/huge_2023-10-06_13.57.51.png">
        </div>
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

    .column iframe {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }

    .column video {
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
