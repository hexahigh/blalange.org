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

export function checkForDevMode() {
    if (config.devMode) {
        registerCommands();
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
        usage: "dev()",
        execute: () => {
            enableDevMode();
        }
    },
    {
        name: "dev_help",
        description: "Show available commands",
        usage: "dev_help()",
        execute: () => {
            devHelp();
        }
    },
    {
        name: "dev_reset",
        description: "Reset to default config",
        usage: "dev_reset()",
        execute: () => {
            resetToDefaults();
        }
    },
    {
        name: "dev_disable_analytics",
        description: "Disable analytics",
        usage: "dev_disable_analytics()",
        execute: () => {
            config.analyticsEnabled = false;
        }
    },
    {
        name: "dev_conf_reset",
        description: "Reset config to default",
        usage: "dev_conf_reset()",
        execute: () => {
            resetToDefaults();
        }
    },
    {
        name: "dev_conf_save",
        description: "Save config to localStorage",
        usage: "dev_conf_save()",
        execute: () => {
            saveConfig();
        }
    },
    {
        name: "dev_conf_load",
        description: "Load config from localStorage",
        usage: "dev_conf_load()",
        execute: () => {
            loadConfig();
        }
    },
    {
        name: "dev_conf_print",
        description: "Show current config",
        usage: "dev_conf_print()",
        execute: () => {
            console.log(config);
        }
    },
    {
        name: "dev_conf_edit",
        description: "Edit config",
        usage: "dev_conf_edit(key, value)",
        execute: (key, value) => {
            config[key] = value;
            saveConfig();
        }
    },
    {
        name: "dev_print_commit",
        description: "Print current commit hash",
        usage: "dev_print_commit()",
        execute: () => {
            console.log(__COMMIT_HASH__);
        },
    },
    {
        name: "dev_print_build_date",
        description: "Print build date",
        usage: "dev_print_build_date()",
        execute: () => {
            console.log(__BUILD_DATE__);
        },
    }
]

function devHelp() {
    console.log("Available commands:");
    commands.forEach(command => {
        console.log(`- ${command.name}: ${command.description} (${command.usage})`);
    });
}