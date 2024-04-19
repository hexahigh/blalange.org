import version from "$lib/json/config.json";

export async function isDarkmode() {
  if (typeof window === "undefined") return false;
  return document.body.classList.contains("dark");
}

export function getLatestVersion() {
  const latestVersion = version.versions[version.versions.length - 1];
  return latestVersion;
}