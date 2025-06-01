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

export function initializeTheme(defaultTheme?: string): void {
  if (typeof localStorage === "undefined") return;
  const savedTheme = localStorage.getItem("theme") || defaultTheme;
  shouldUpdate = true;
  currentTheme.set(savedTheme);
}

export let currentTheme = writable("");

// Run function whenever currentTheme changes
currentTheme.subscribe((theme) => {
  if (!shouldUpdate) return; // Prevents initial run before theme is set
  applyThemeToDocument(theme);
  saveThemeToLocalStorage(theme);
  console.log(`Theme changed to: ${theme}`);
});
