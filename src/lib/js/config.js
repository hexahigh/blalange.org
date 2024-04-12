const defaultConfig = {
    devMode: false,
    dbEndpoint: "https://db.080609.xyz",
    analyticsEnabled: true,
}


export let config = {
    devMode: defaultConfig.devMode,
    dbEndpoint: defaultConfig.dbEndpoint,
    analyticsEnabled: defaultConfig.analyticsEnabled,
}

// Function to load config from localStorage
export function loadConfig() {
    if (typeof window === "undefined") return;
    const savedConfig = localStorage.getItem('config');
    if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig);
        config = { ...defaultConfig, ...parsedConfig };
    } else {
        config = defaultConfig;
    }
}

// Function to save config to localStorage
export function saveConfig() {
    if (typeof window === "undefined") return;
    localStorage.setItem('config', JSON.stringify(config));
}

// Resets config to defaults and saves it
export function resetToDefaults() {
    config = defaultConfig;
    saveConfig();
}