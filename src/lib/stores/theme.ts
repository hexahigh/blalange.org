import { writable, get } from "svelte/store";

let shouldUpdate = false;

function applyThemeToDocument(theme: string): void {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

function saveThemeToLocalStorage(theme: string): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem("theme", theme);
}

export function setTheme(theme: string): void {
  currentTheme.set(theme);
}

/**
 * Initializes the application's theme based on saved preferences, system settings, or provided defaults.
 *
 * - If a theme is saved in localStorage, it will not be changed.
 * - If no theme is saved and both `defaultTheme` and `defaultDarkTheme` are provided,
 *   the theme is set according to the user's system color scheme preference.
 * - If only `defaultTheme` is provided, it is used as the initial theme.
 *
 * @param defaultTheme - The default theme to use if no saved theme is found.
 * @param defaultDarkTheme - The default dark theme to use if no saved theme is found and the user prefers a dark color scheme.
 */
export function initializeTheme(defaultTheme?: string, defaultDarkTheme?: string): void {
  if (typeof localStorage === "undefined") return;
  const savedTheme = localStorage.getItem("theme")
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  if (!savedTheme && defaultTheme && defaultDarkTheme) {
    const initialTheme = prefersLight ? (defaultTheme) : (defaultDarkTheme);
    currentTheme.set(initialTheme);
    shouldUpdate = true;
    return;
  } else if (!savedTheme && defaultTheme) {
    currentTheme.set(defaultTheme);
    shouldUpdate = true;
    return;
  }
}

export let currentTheme = writable("");

// Run function whenever currentTheme changes
currentTheme.subscribe((theme) => {
  if (!shouldUpdate) return; // Prevents initial run before theme is set
  applyThemeToDocument(theme);
  saveThemeToLocalStorage(theme);
  console.log(`Theme changed to: ${theme}`);
});
