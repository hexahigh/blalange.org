import { config, loadConfig, saveConfig, resetToDefaults } from "./config";

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
    if (config.devMode) {
        console.log("You are already a super cool developer!");
        return;
    }
    console.log('Super cool devmode activated!');
    config.devMode = true;
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
    },
    {
        name: "dev_reset",
        description: "Reset to default config",
        execute: () => {
            resetToDefaults();
        }
    },
    {
        name: "dev_disable_analytics",
        description: "Disable analytics",
        execute: () => {
            config.analyticsEnabled = false;
        }
    },
    {
        name: "dev_conf_reset",
        description: "Reset config to default",
        execute: () => {
            resetToDefaults();
        }
    },
    {
        name: "dev_conf_save",
        description: "Save config to localStorage",
        execute: () => {
            saveConfig();
        }
    },
    {
        name: "dev_conf_load",
        description: "Load config from localStorage",
        execute: () => {
            loadConfig();
        }
    },
    {
        name: "dev_conf_print",
        description: "Show current config",
        execute: () => {
            console.log(config);
        }
    },
    {
        name: "dev_conf_edit",
        description: "Edit config",
        execute: (key, value) => {
            config[key] = value;
            saveConfig();
        }
    }
]

function devHelp() {
    console.log("Available commands:");
    commands.forEach(command => {
        console.log(`- ${command.name}: ${command.description}`);
    });
}