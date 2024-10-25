import { writable } from "svelte/store";
import { thumbs } from "@dicebear/collection";

/**
 * This is the global config which is used by the client and the server.
 * Note that not everything can be changed, many methods/functions simply use the default config.
 */
export const defaultConfig = {
  devMode: false,
  dbEndpoint: "https://db.080609.xyz",
  directusEndpoint: "https://db.blalange.org",
  directeusWebsocketEndpoint: "wss://db.blalange.org",
  keepMeLoggedIn: true, //! Directus does this automatically, should be removed in a future version
  keepMeLoggedInDelay: 1000 * 60 * 5, //! Directus does this automatically, should be removed in a future version
  analyticsEnabled: true,
  logoAlwaysSpins: false,
  primaryDomain: "blalange.org",
  dicebearCollection: thumbs, //* Does not work, should be removed in a future version
  font: {
    family: "Inter Variable",
    weight: 400,
  },
  tos: {
    lastUpdated: "22-08-2024",
  },
  privacy: {
    lastUpdated: "22-08-2024",
  },
  emails: {
    copyrightAgent: "simon@blalange.org",
    privacyAgent: "simon@blalange.org",
  },
  translations: {
    defaultLocale: "nb",
    currentLocale: "nb",
    supportedLanguages: [
      {
        name: "English",
        icon: "circle-flags:gb",
        code: "en",
      },
      {
        name: "Norwegian",
        icon: "circle-flags:no",
        code: "nb",
        primary: true,
      },
      {
        name: "French",
        icon: "circle-flags:fr",
        code: "fr",
      },
    ]
  },
};

/**
 * This is the global config which is used by the client and the server.
 * Note that not everything can be changed, many methods/functions simply use the default config.
 */
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

// Function to save config to localStorage and cookies
export function saveConfig() {
  if (typeof window === "undefined") return;
  config.subscribe((currentConfig) => {
    localStorage.setItem("config", JSON.stringify(currentConfig));
    document.cookie = `config=${JSON.stringify(currentConfig)}`;
  })();
}

/**
 * Resets the global configuration to its default values, and optionally saves it to storage.
 *
 * @param {boolean} noSave - Whether to save the default configuration to storage. Defaults to false.
 * @return {void}
 */
export function resetToDefaults(noSave = false) {
  config.set(defaultConfig);
  if (!noSave) saveConfig();
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