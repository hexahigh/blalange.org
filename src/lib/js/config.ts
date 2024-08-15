import { writable } from "svelte/store";
import { thumbs } from "@dicebear/collection";

export const defaultConfig = {
  devMode: false,
  dbEndpoint: "https://db.080609.xyz",
  analyticsEnabled: true,
  logoAlwaysSpins: false,
  primaryDomain: "blalange.org",
  dicebearCollection: thumbs,
  font: {
    family: "Inter Variable",
    weight: 400,
  }
};

export const config = writable({
  ...defaultConfig,
});

export const asciiLogo = [
  "             ++++++++++++              ",
  "           ++++++++++++++++            ",
  "         ++++++++++++++++++++          ",
  "       -+++++++++++++++++++++++        ",
  "      --++++++++++++++++++++++++       ",
  "     --++++++++++++++++++++++++++      ",
  "    ---+++++++++++++++    ++++++++     ",
  "    ---+++++++++++           ++++++    ",
  "   ----+++++++++               ++++    ",
  "  -----++++++++                 ++++   ",
  "  -----+++++++                    ++ ++",
  " ------++++++                      ++++",
  " ------+++++                     ++++++",
  " ------++++                       +++++",
  " ------++++                       ++++ ",
  "-------+++                             ",
  "-------+++                             ",
  "--------++                             ",
  "--------+                              ",
  "---------                              ",
  "--------..                             ",
  "--------..                             ",
  "---------..                            ",
  " --------...                           ",
  " --------....                          ",
  " --------..... .......                 ",
  "  -------............                  ",
  "  --------..........              ..   ",
  "   --------........             ...    ",
  "   --------.............   .......     ",
  "    --------......................     ",
  "     --------..........+#........      ",
  "      --------.........##+......       ",
  "       --------........+#......        ",
  "        ..-------............          ",
  "        ....--------.......            ",
  "        ......-----------              ",
  "         .....                         ",
  "         ....                          ",
  "         ....                          ",
  "          ...                          ",
  "          ..                           ",
  "                                       ",
];

// Function to load config from localStorage
export function loadConfig() {
  if (typeof window === "undefined") return;
  const savedConfig = localStorage.getItem("config");
  if (savedConfig) {
    const parsedConfig = JSON.parse(savedConfig);
    config.set({ ...defaultConfig, ...parsedConfig });
  } else {
    config.set(defaultConfig);
    saveConfig();
  }
}

// Function to save config to localStorage
export function saveConfig() {
  if (typeof window === "undefined") return;
  config.subscribe((currentConfig) => {
    localStorage.setItem("config", JSON.stringify(currentConfig));
  })();
}

// Resets config to defaults and saves it
export function resetToDefaults() {
  config.set(defaultConfig);
  saveConfig();
}

export function editKey(key: string, value: any) {
  config.update((config) => {
    const keys = key.split('.');
    let currentLevel = config;

    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i];
      if (i === keys.length - 1) {
        // This is the deepest level, set the value here
        currentLevel[currentKey] = value;
      } else {
        // If the property doesn't exist yet, initialize it as an empty object
        if (!currentLevel[currentKey]) {
          currentLevel[currentKey] = {};
        }
        // Go deeper
        currentLevel = currentLevel[currentKey];
      }
    }

    return config;
  });
  saveConfig();
}