import { asciiLogo } from "$lib/js/config.ts";
import { getLatestVersion } from "$lib/js/lib.js";

import keystroke from "./../soundpacks/typewriter/keystroke.wav";
import katching from "./../soundpacks/typewriter/katching.wav";

export async function main(print, playSound, showInput, machine) {
  showInput = false;
  try {
    let screenWidth = window.screen.width || window.innerWidth;
    let screenHeight = window.screen.height || window.innerHeight;
    let memory = navigator.deviceMemory;
    let info = [
      "OS: BlålangeOS " + (getLatestVersion().id || ""),
      "Host: " + machine,
      "Shell: blåsh",
      "CPU: Blåchip Kosinus-9 (4) 1.094GHz",
      "Resolution: " + screenWidth + "x" + screenHeight,
      "Memory: " + (memory || "?") + "GB",
    ];

    let output = [];

    for (let i = 0; i < asciiLogo.length; i++) {
      if (i < info.length) {
        output.push(asciiLogo[i] + info[i]);
      } else {
        output.push(asciiLogo[i]);
      }
    }

    // print one line every 50ms
    for (let i = 0; i < output.length; i++) {
      print(output[i] + "\n");
      playSound(keystroke);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    playSound(katching);
  } catch (error) {
    print(error);
  }

  showInput = true;
}
