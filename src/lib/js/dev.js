export let devMode = false;

export function initialize() {
    if (typeof window !== "undefined") {
        // If the user presses D + E + V then enable dev mode
        let sequence = ['D', 'E', 'V'];
        let currentIndex = 0;

        window.addEventListener('keydown', function(event) {
            // Check if the pressed key is the next in the sequence
            if (event.key === sequence[currentIndex]) {
                currentIndex++;

                // If the entire sequence has been matched
                if (currentIndex === sequence.length) {
                    enableDevMode();
                    currentIndex = 0; // Reset for future use
                }
            } else {
                // If the sequence is broken, reset
                currentIndex = 0;
            }
        });
    }
}

function enableDevMode() {
    console.log('Super cool devmode activated!');
    devMode = true;
}