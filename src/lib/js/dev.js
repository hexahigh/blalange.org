export let devMode = false;

export function initialize() {
    if (typeof window !== "undefined") {
        // If the user presses D + E + V then enable dev mode
        let sequence = ['d', 'e', 'v'];
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
    if (devMode) {
        console.log("You are already a super cool developer!");
        return;
    }
    console.log('Super cool devmode activated!');
    devMode = true;
    registerCommands();
}

function registerCommands() {
    // Register commands by assigning their execute function to the window object
    commands.forEach(command => {
        window[command.name] = command.execute;
    });
}

let commands = [
    {
        name: "dev",
        description: "Enable dev mode",
        execute: () => {
            enableDevMode();
        }
    },
    {
        name: "dev_help",
        description: "Show available commands",
        execute: () => {
            devHelp();
        }
    }
]

function devHelp() {
    console.log("Available commands:");
    commands.forEach(command => {
        console.log(`- ${command.name}: ${command.description}`);
    });
}