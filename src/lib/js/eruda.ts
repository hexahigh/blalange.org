import { config } from "$lib/js/config";
import type { Eruda } from "eruda"

export async function init() {
  if (typeof window === "undefined") return; // Exit if not in a browser environment

  let eruda: Eruda
  let erudaLoaded = false;

  config.subscribe(async (value) => {
    if (value.erudaEnabled && !erudaLoaded) {
      eruda = (await import("eruda")).default as Eruda
      eruda.init();
      erudaLoaded = true;
    } else if (!value.erudaEnabled && erudaLoaded) {
      eruda.destroy();
      erudaLoaded = false;
    }
  });
}
