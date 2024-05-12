import type { StdlibType, TextVideo } from "../types";
import importedVideo from "./data/apple.json";
import * as Tone from "tone";

import song from "./data/apple.mp3?url";

const video = importedVideo as TextVideo;

const defaultOptions = {
  speed: 1,
};

export default function main(stdlib: StdlibType, inOptions = {}) {
  const options = { ...defaultOptions, ...inOptions };

  stdlib.print("Loading, please wait...");

  // Load audio
  const player = new Tone.Player(song).toDestination();

  if (video.format_version !== 2) {
    stdlib.print("Unsupported format version, expected 2, got " + video.format_version);
    return;
  }

  Tone.loaded().then(() => {
    if (options.speed) {
      player.playbackRate = options.speed;
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

    delay = delay / options.speed;

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
