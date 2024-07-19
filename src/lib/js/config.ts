import { writable } from "svelte/store";

export const defaultConfig = {
  devMode: false,
  dbEndpoint: "https://db.080609.xyz",
  analyticsEnabled: true,
  logoAlwaysSpins: false,
  primaryDomain: "blalange.org",
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
