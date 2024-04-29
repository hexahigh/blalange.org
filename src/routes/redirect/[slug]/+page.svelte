<script>
  export let data;


</script>

<svelte:head>
  <meta name="referrer" content="never" />
  <meta name="robots" content="noindex, nofollow" />
  {#if !data.noRedirect}
    <meta http-equiv="refresh" content="3; URL={data.url}" />
  {/if}
</svelte:head>

<div
  style="background-image: url({data.image})"
  class="flex flex-col items-center justify-center min-h-screen bg-cover"
>
  <div class="bg-black opacity-70 text-white md:w-1/2 sm:w-3/4 text-center rounded-xl p-8">
    <h1 class="text-3xl rimword">Please wait, you are being redirected to:</h1>
    <br />
    <a href={data.url} class="link-color text-2xl" referrer="never" rel="nofollow"
      >{data.url}</a
    >

    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</div>

<style>
  .link-color {
    color: #4183c4;
  }

  .spinner {
    margin: 30px auto 0;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 18px;
    height: 18px;
    background-color: #eee;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
