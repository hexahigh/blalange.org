<script>
    import * as conf from "$lib/js/conf.js";
    import { page } from "$app/stores";
    let path;

    $: path = $page.url.pathname;
</script>

<nav>
    <img
        src="/img/favicon.png"
        alt="Kukfest logo"
        on:click={conf.fireAll}
        class="rounded-lg"
    />
    <p class="krona">Kukfest</p>
    <ul id="nav-pc">
        <li class={path === "/" ? "active" : ""}><a href="/">Hjem</a></li>
        <li class={path.includes("/images") ? "active" : ""}>
            <a href="/images/23">Bilder</a>
        </li>
        <li><a href="https://boofdev.eu/#contact">Kontakt</a></li>
        <li><a href="https://merch.kukfest.eu">Merch</a></li>
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

    #nav-mobile {
        display: none;
    }

    nav ul li {
        list-style: none;
        font-size: 1.1rem;
    }

    nav ul li a {
        color: var(--nav-link-inactive);
    }

    nav ul li a:hover {
        color: var(--nav-link-hover);
    }

    #nav-active {
        color: var(--text-color);
    }
    #nav-active {
        color: #000000;
    }
    .scrollTop {
        position: fixed;
        background: #000;
        padding: 0.4rem 0.5rem 0.1rem 0.5rem;
        border-radius: 5px;
        right: 0.5rem;
        bottom: -25%;
        transition: all 400ms ease-in-out;
    }

    .scrollTop:hover {
        bottom: 1rem;
    }

    .scrollTop-show {
        bottom: 0.5rem;
    }

    #nav-menu {
        background: transparent;
        border: none;
    }

    #nav-menu img {
        height: 35px;
        width: 35px;
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

    #nav-donate-mobile {
        border-radius: 0;
        width: 100%;
    }

    .nav-mobile-content {
        box-shadow: 0 10px 10px #00000009;
        padding: 2rem 1.5rem;
        padding-top: 0;
        display: block !important;
        animation: nav-open 600ms;
        position: fixed;
        background: #192127;
        width: 100%;
        z-index: 999999;
    }

    .nav-mobile-content-close {
        display: none;
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
