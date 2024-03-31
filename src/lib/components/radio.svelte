<script>
  import { Range, Label } from "flowbite-svelte";
  import { PauseOutline, PlayOutline } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import { Howl, Howler } from "howler";

  const stream = "https://radio.blalange.org/stream";
  const status_url = "https://radio.blalange.org/status-json.xsl";

  let volume = 100;
  let title = "";
  let playing = true;

  var sound = new Howl({
    src: [stream],
    html5: true,
  });

  sound.play();

  const stupidAutoPlay = async () => {
     if (!sound.playing()) {
      sound.play();
    }
  }

  setInterval(stupidAutoPlay, 1000);

  $: {
    Howler.volume(volume / 100);
  }

  function togglePlayPause() {
    if (playing) {
      sound.mute(true);
    } else {
      sound.mute(false);
    }
    playing = !playing; // Toggle the play/pause state
  }

  onMount(async () => {
    const fetchTitle = async () => {
      const response = await fetch(status_url);
      const data = await response.json();
      title = data.icestats.source.title;
    };

    // Fetch the title immediately when the component mounts
    await fetchTitle();

    // Set up an interval to fetch the title every 5 seconds (or any desired interval)
    const intervalId = setInterval(fetchTitle, 5000);

    // Clean up the interval when the component is destroyed
    return () => clearInterval(intervalId);
  });
</script>

<div class="flex flex-col items-center justify-center dark:text-ctp-text">
  <div class="p-6 mt-10 mb-10 rounded shadow-md shadow-black w-80 text-center">
    <h2 class="text-3xl">Blålange radio</h2>
    <p>Den beste radio kanalen for Blålanger</p>
    <p>Volume: {volume}</p>
    <Range
      id="range-minmax"
      min="0"
      max="100"
      bind:value={volume}
      class="w-1/2"
    />
    <p>{title}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex justify-center">
      <div
        class="rounded-full bg-blue-600 w-12 h-12 flex items-center justify-center"
        on:click={togglePlayPause}
      >
        {#if playing}
          <PauseOutline class="h-6 w-6 text-white" />
        {:else}
          <PlayOutline class="h-6 w-6 text-white" />
        {/if}
      </div>
    </div>
  </div>
</div>
