<script>
    import * as conf from "$lib/js/conf.js";
    import { page } from "$app/stores";
    import autoAnimate from "@formkit/auto-animate";
    let path;

    $: path = $page.url.pathname;
</script>

<nav>
    <img
        src="/img/favicon.png"
        alt="Blålange logo"
        on:click={conf.fireAll}
        class="rounded-lg"
    />
    <p class="krona">Blålange</p>
    <ul id="nav-pc" use:autoAnimate class="text-blue">
        <li class={path === "/" ? "active" : ""}><a href="/">Hjem</a></li>
        <li class={path.includes("/images") ? "active" : ""}>
            <a href="/images/23">Bilder</a>
        </li>
        <li class={path.includes("/articles") ? "active" : ""}><a href="/articles">Artikler</a></li>
        <li><a href="https://merch.blalange.org">Merch</a></li>
        <li><a href="https://boofdev.eu/#contact">Kontakt</a></li>
    </ul>
</nav>

<style>
    @font-face {
        font-family: Broadway-custom;
        src: url(/font/broadway%20regular.ttf);
    }

    nav li.active {
        border-bottom: solid;
        border-color: #000000;
    }

    :root {
        --text-color: #000000;
        --nav-link-inactive: #000000;
        --body-bg: #ffffff;
        --nav-link-hover: #000000;
    }

    nav {
        padding: 1.5rem 5vw;
        display: flex;
        align-items: center;
        gap: 13px;
    }

    nav > img {
        height: 45px;
        width: 45px;
    }

    nav > p {
        font-size: 1.6rem;
        font-weight: 600;
    }

    nav ul {
        display: flex;
        margin-left: auto;
        align-items: center;
        gap: 3vw;
        z-index: 1;
    }

    nav ul li {
        list-style: none;
        font-size: 1.1rem;
    }

    .nav-mobile-content ul li {
        list-style: none;
        font-size: 1.4rem;
    }

    .nav-mobile-content ul li a {
        color: var(--text-color);
    }

    .nav-mobile-content ul li a:hover {
        color: var(--nav-link-hover);
    }

    .nav-mobile-content ul li:last-child {
        margin-top: 1rem;
    }

    @keyframes nav-open {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
