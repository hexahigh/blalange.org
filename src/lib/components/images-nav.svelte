<script>
  import { page } from "$app/stores";
  let path;

  $: path = $page.url.pathname;
</script>

<nav>
  <ul id="nav-pc" class="text-blue">
    <li class={path === "/images/23.1" ? "active" : ""}>
      <a href="/images/23.1">2023.1</a>
    </li>
  </ul>
</nav>

<style>
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
</style>
