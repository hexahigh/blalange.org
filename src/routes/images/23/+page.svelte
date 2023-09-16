<script>
    import Nav from "../../Nav.svelte";
    import ImagesNav from "../../components/images-nav.svelte";
</script>

<Nav />
<ImagesNav />

<div class="main">
    <div class="row">
        <div class="column">
            <iframe src="https://yewtu.be/embed/72cLBqbh2DE" title="Kukfest 23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="column">
        </div>
        <div class="column">
        </div>
        <div class="column">
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

    .column video {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }

    .column iframe {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
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
