import { Howl, Howler } from "howler/dist/howler.core.min.js";
import kosinus from "$lib/audio/kosinus.mp3";


export function initEgg() {
    if (typeof window !== "undefined") {
        let sequence = ['k', 'o', 's', 'i', 'n', 'u', 's'];
        let currentIndex = 0;

        window.addEventListener('keydown', function(event) {
            // Check if the pressed key is the next in the sequence
            if (event.key === sequence[currentIndex]) {
                currentIndex++;

                // If the entire sequence has been matched
                if (currentIndex === sequence.length) {
                    play();
                    currentIndex = 0; // Reset for future use
                }
            } else {
                // If the sequence is broken, reset
                currentIndex = 0;
            }
        });
    }
}

function play() {
    let sound = new Howl({
        src: [kosinus],
      });

      sound.play();
}