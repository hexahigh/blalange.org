import { Howl, Howler } from "howler";
const voiceLines = import.meta.glob("$lib/audio/egg2/*.wav");

let triggerCount = 0;

export function initEgg() {
  if (typeof window !== "undefined") {
    let sequence = ["6", "9"];
    let currentIndex = 0;

    window.addEventListener("keydown", function (event) {
      // Check if the pressed key is the next in the sequence
      if (event.key === sequence[currentIndex]) {
        currentIndex++;

        // If the entire sequence has been matched
        if (currentIndex === sequence.length) {
          trigger();
          triggerCount++;
          currentIndex = 0; // Reset for future use
        }
      } else {
        // If the sequence is broken, reset
        currentIndex = 0;
      }
    });
  }
}

function trigger() {
  if (triggerCount == 0) return; // Dont play in case the user "accidentally" presses 69

  switch (triggerCount) {
    case 1:
      play("no1.wav");
      break;

    case 2:
      play("no2.wav");
      break;

    case 3:
      play("no3.wav");
      break;

    case 4:
      play("generic2.wav");
      break;

    case 5:
      play("generic1.wav");
      break;

    case 6:
      play("idiot.wav");
      break;

    case 7:
      play("fess.wav");
      break;

    case 8:
      play("stupid.wav");
      break;

    case 9:
      play("generic3.wav");
      break;

    case 10:
      play("ugly.wav");
      break;

    case 11:
      play("ass.wav");
      break;

    case 12:
      play("engi-incoming.wav");
      break;

    case 13:
      play("danke.wav");
      break;

    case 14:
      play("engi-pray.wav");
      break;

    case 15:
      play("engi-done.wav");
      break;

    case 16:
      play("engi-seen.wav");
      break;

    case 17:
      play("engi-booo.wav");
      break;

    case 18:
      play("engi-mad1.wav");
      break;

    case 19:
      play("engi-mad2.wav");
      break;

    case 20:
      play("engi-dick.wav");
      // Remove the entire page
      document.querySelector("html").remove();
      break;
  }
}

function play(filename) {
  for (const key in voiceLines) {
    if (key.endsWith(filename)) {
      let sound = new Howl({
        src: [key],
      });

      sound.play();

      break;
    }
  }
}
