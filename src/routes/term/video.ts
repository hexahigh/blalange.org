import type { StdlibType, TextVideo } from "./types";
import * as Tone from "tone";
import axios, { type AxiosResponse } from "axios";

export async function play(
  stdlib: StdlibType,
  jsonUrl: string,
  audioUrl: string,
  speed: number = 1
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
      video = response.data
    }
  );

  if (video.format_version !== 2) {
    stdlib.print(
      "Unsupported format version, expected 2, got " + video.format_version
    );
    return;
  }

  Tone.loaded().then(() => {
    if (speed) {
      player.playbackRate = speed;
    }
    player.start();

    // Calculate the delay between frames
    let defaultDelay = 33.33;
    let delay = defaultDelay;

    try {
      delay = (1 / video.fps) * 1000;
    } catch (e) {
      console.error(e);
    }

    delay = delay / speed;

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
      }
    }, delay);
  });
}