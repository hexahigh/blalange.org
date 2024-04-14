import { Howl, Howler } from "howler";

import no1 from "$lib/audio/egg2/no1.wav";
import no2 from "$lib/audio/egg2/no2.wav";
import no3 from "$lib/audio/egg2/no3.wav";
import generic1 from "$lib/audio/egg2/generic1.wav";
import generic2 from "$lib/audio/egg2/generic2.wav";
import generic3 from "$lib/audio/egg2/generic3.wav";
import idiot from "$lib/audio/egg2/idiot.wav";
import fess from "$lib/audio/egg2/fess.wav";
import stupid from "$lib/audio/egg2/egg2/stupid.wav";
import ugly from "$lib/audio/egg2/ugly.wav";
import ass from "$lib/audio/egg2/ass.wav";
import engiIncoming from "$lib/audio/egg2/engi-incoming.wav";
import danke from "$lib/audio/egg2/danke.wav";
import engiPray from "$lib/audio/egg2/engi-pray.wav";
import engiDone from "$lib/audio/egg2/engi-done.wav";
import engiSeen from "$lib/audio/egg2/engi-seen.wav";
import engiBooo from "$lib/audio/egg2/engi-booo.wav";
import engiMad1 from "$lib/audio/egg2/engi-mad1.wav";
import engiMad2 from "$lib/audio/egg2/engi-mad2.wav";
import engiDick from "$lib/audio/egg2/engi-dick.wav";

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
      play(no1);
      break;

    case 2:
      play(no2);
      break;

    case 3:
      play(no3);
      break;

    case 4:
      play(generic2);
      break;

    case 5:
      play(generic1);
      break;

    case 6:
      play(idiot);
      break;

    case 7:
      play(fess);
      break;

    case 8:
      play(stupid);
      break;

    case 9:
      play(generic3);
      break;

    case 10:
      play(ugly);
      break;

    case 11:
      play(ass);
      break;

    case 12:
      play(engiIncoming);
      break;

    case 13:
      play(danke);
      break;

    case 14:
      play(engiPray);
      break;

    case 15:
      play(engiDone);
      break;

    case 16:
      play(engiSeen);
      break;

    case 17:
      play(engiBooo);
      break;

    case 18:
      play(engiMad1);
      break;

    case 19:
      play(engiMad2);
      break;

    case 20:
      play(engiDick);
      // Remove the entire page
      document.querySelector("html").remove();
      break;
  }
}

function play(file) {
  let sound = new Howl({
    src: [file],
  });

  sound.play();
}
