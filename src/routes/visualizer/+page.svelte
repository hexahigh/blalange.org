<script>
  import AudioMotionAnalyzer from "audiomotion-analyzer";
  import { onMount } from "svelte";

  let audioData;

  onMount(async () => {
    const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("container"),
      {
        source: document.getElementById("audio"),
        radial: true,
        barSpace: 0,
        showFPS: true,
        gradient: "steelblue",
        smoothing: 0.9,
        spinSpeed: 2,
        channelLayout: "dual-horizontal",
      }
    );
  });

  function handleFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const audioElement = document.getElementById("audio");
      audioElement.src = e.target.result;
      audioElement.play();
    };

    reader.readAsDataURL(file);
  }
</script>

<div class="w-full h-full">
  <input id="audioInput" type="file" on:change={handleFileChange} />
  <audio id="audio" controls></audio>
  <div id="container" class="h-screen"></div>
</div>
