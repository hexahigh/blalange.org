import type { StdlibType, TextVideo } from "./types";
import * as Tone from "tone";
import axios, { type AxiosResponse } from "axios";
import Pako from "pako";
import fitty from "fitty";

type PlayOptions = {
  speed?: number;
  autoScale?: boolean;
  textSize?: number;
};

export async function play(
  stdlib: StdlibType,
  jsonUrl: string,
  audioUrl: string,
  options: PlayOptions
) {
  stdlib.print("Loading, please wait...");

  let player = new Tone.Player();

  if (audioUrl !== "") {
    // Load audio
    player = new Tone.Player(audioUrl).toDestination();
  }

  let video: TextVideo;

  // Download video json
  await axios.get(jsonUrl).then((response) => {
    video = response.data;
  });

  if (video.format_version !== 3) {
    stdlib.print(
      "Unsupported format version, expected 3, got " + video.format_version
    );
    return;
  }

  if (video.encoding !== "" || video.compression !== "") {
    // Decode the encoded frames
    stdlib.print("Decoding frames...");
    let decodedFrames = "";
    switch (video.encoding) {
      case "base64":
        decodedFrames = atob(video.encodedFrames);
        break;
    }

    if (!decodedFrames) {
      stdlib.print("Error: Decoded frames are undefined.");
      return;
    }

    // Decompress the frames
    stdlib.print("Decompressing frames...");
    let decompressedFrames;
    switch (video.compression) {
      case "gzip":
        // Convert binary string to character-number array
        let charData = decodedFrames.split("").map(function (x) {
          return x.charCodeAt(0);
        });
        // Turn number array into byte-array
        let binData = new Uint8Array(charData);
        // Pako
        let data = Pako.inflate(binData);
        // Convert gunzipped byteArray back to ascii string:
        decompressedFrames = new TextDecoder("utf-8").decode(data);
        break;
    }
    video.frames = JSON.parse(decompressedFrames);
  }

  stdlib.print(
    "Your video will start in 5 seconds, if the video looks weird then you might need to zoom out."
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));

  Tone.loaded().then(() => {
    if (options.speed) {
      player.playbackRate = options.speed;
    }
    player.start();

    // Calculate the delay between frames
    let defaultDelay = 33.33; // 30 fps
    let delay = defaultDelay;

    try {
      delay = (1 / video.fps) * 1000;
    } catch (e) {
      console.error(e);
    }

    delay = delay / options.speed;

    let fitter;

    if (options.autoScale) {
      fitter = fitty("#terminalContainer", {
        minSize: 1,
      });
    }

    if (options.textSize) {
      stdlib.setTextSize(options.textSize);
    }

    stdlib.setShowInput(false);

    // Print one frame every options.speed milliseconds
    let i = 0;
    const framesLength = video.frames.length; // Store the length of the frames array
    setInterval(() => {
      if (i < framesLength) {
        // Check if i is within the bounds of the frames array
        // Clear lineData
        stdlib.setLineData([]);
        stdlib.print(video.frames[i].text);
        i++;
      } else {
        stdlib.setShowInput(true);
        player.stop();
        stdlib.setLineData([]);
        if (options.autoScale) {
          fitter[0].unsubscribe();
        }
        return;
      }
      return;
    }, delay);
    return;
  });
}
