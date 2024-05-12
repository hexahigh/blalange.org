import type { StdlibType } from "../types";
import importedFrames from "./data/apple.json";
import * as Tone from "tone";

import song from "./data/apple.mp3?url";

const frames = importedFrames as { text: string }[];

const defaultOptions = {
  speed: 1,
};

export default function main(stdlib: StdlibType, inOptions = {}) {
  const options = { ...defaultOptions, ...inOptions };

  // Load audio
  const player = new Tone.Player(song).toDestination();

  Tone.loaded().then(() => {
    if (options.speed) {
      player.playbackRate = options.speed;
    }
    player.start();
  });

  // Calculate the delay between frames
  let defaultDelay = 33.33;
  let delay = defaultDelay;

  delay = defaultDelay / options.speed;

  // Print one frame every options.speed milliseconds
  let i = 0;
  const framesLength = frames.length; // Store the length of the frames array
  setInterval(() => {
    if (i < framesLength) {
      // Check if i is within the bounds of the frames array
      // Clear lineData
      stdlib.setLineData([]);
      stdlib.print(frames[i].text);
      i++;
    }
  }, delay);
}
