export async function isDarkmode() {
  if (typeof window === "undefined") return false;
  return document.body.classList.contains("dark");
}
