<script>
  import { run } from 'svelte/legacy';

  import { Range, Label } from "flowbite-svelte";
  import { PauseOutline, PlayOutline } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import { Howl, Howler } from "howler/dist/howler.core.min.js";
  import { dev } from "$app/environment";
  import vinylSvg from "$lib/svg/vinyl.svg";

  const enableImage = false;
  const stream = "https://radio.blalange.org/stream";
  const status_url = "https://radio.blalange.org/status-json.xsl";

  let coverSrc = $state(vinylSvg);

  function devPrint(...msg) {
    if (dev) {
      console.log(...msg);
    }
  }

  let volume = $state(100);
  let title = $state("");
  let playing = $state(false);

  let sound = new Howl({
    src: [stream],
    html5: true,
    mute: true,
  });

  sound.play();

  const stupidAutoPlay = async () => {
    if (!sound.playing()) {
      sound.play();
    }
  };

  setInterval(stupidAutoPlay, 1000);

  // Resync
  const resync = async () => {
    if (sound.playing()) {
      sound.unload();
      sound = new Howl({
        src: [stream],
        html5: true,
      });
      sound.play();
    }
  };

  setInterval(resync, 15 * 60 * 1000);

  // Resync2
  const resync2 = async () => {
    sound.seek(100000000);
  };

  setInterval(resync2, 5 * 60 * 1000);

  run(() => {
    Howler.volume(volume / 100);
  });

  function togglePlayPause() {
    if (playing) {
      sound.mute(true);
    } else {
      sound.mute(false);
    }
    playing = !playing; // Toggle the play/pause state
  }

  async function getImage(string) {
    // Get the song title by splitting the -
    const title = string.split("-")[1];

    // MusicBrainz API URL
    const apiUrl = `https://musicbrainz.org/ws/2/recording/?query=title:${encodeURIComponent(title)}&fmt=json`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.recordings && data.recordings.length > 0) {
        // Iterate through each recording
        for (const recording of data.recordings) {
          if (recording.releases && recording.releases.length > 0) {
            // Find the first release with the status set to "Official" in each recording
            const officialRelease = recording.releases.find(
              (release) => release.status === "Official"
            );
            if (officialRelease) {
              if (officialRelease.score < 50) {
                console.log("Score was too low, returning default image");
                return vinylSvg;
              }
              // Assuming the first release has the album art
              const imageUrl = `https://coverartarchive.org/release/${officialRelease.id}/front-250.jpg`;
              return imageUrl;
            }
          }
        }
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

    // Return a default image URL if no album art is found
    return vinylSvg;
  }

  onMount(async () => {
    let previousTitle = "";
    window.getImage = getImage;

    const fetchTitle = async () => {
      const response = await fetch(status_url);
      const data = await response.json();
      title = data.icestats.source.title;
    };

    // Fetch the title immediately when the component mounts
    await fetchTitle();

    // Set up an interval to fetch the title every 5 seconds (or any desired interval)
    const intervalId = setInterval(fetchTitle, 5000);

    if (enableImage) {
      const fetchImage = async () => {
        if (title === previousTitle) {
          return;
        }
        try {
          const imageUrl = await getImage(title);
          coverSrc = imageUrl;
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
          coverSrc = vinylSvg;
        }

        previousTitle = title;
      };

      fetchImage();

      const intervalId2 = setInterval(fetchImage, 1000);
    }

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  });
</script>

<div class="flex flex-col items-center justify-center dark:text-ctp-text">
  <div class="p-6 rounded shadow-md shadow-black w-80 text-center">
    <h2 class="text-3xl">Blålange radio</h2>
    <p>Den beste radio kanalen for Blålanger</p>
    <!-- svelte-ignore a11y_missing_attribute -->
    {#if enableImage}<img src={coverSrc} alt="Album cover" class="rounded-lg" />
    {/if}
    <p>Volume: {volume}</p>
    <Range
      id="range-minmax"
      min="0"
      max="100"
      bind:value={volume}
      class="w-1/2"
    />
    <p>{title}</p>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="flex justify-center">
      <div
        class="rounded-full bg-blue-600 w-12 h-12 flex items-center justify-center"
        onclick={togglePlayPause}
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
