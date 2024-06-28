import PocketBase from "pocketbase";
import { getSessionId } from "./session";
import { config, defaultConfig } from "./config";

let pb = new PocketBase(defaultConfig.dbEndpoint);

let enabled: boolean;
let devMode: boolean;

config.subscribe((value) => {
  pb = new PocketBase(value.dbEndpoint);
  enabled = value.analyticsEnabled;
  devMode = value.devMode;
});

let lastUrl = typeof window !== "undefined" ? "" : "";

let ip = "";
let dnt;

export { startAnalyticsMonitoring };

async function collect2() {
  if (typeof window === "undefined") return; // Exit if not in a browser environment

  if (!enabled) return; // Exit if analytics are disabled

  if (dnt == undefined) {
    dnt = navigator.doNotTrack === "1";
  }

  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const unix = new Date().getTime();
  const url = window.location.href;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const networkInfo = "unknown"; //! Deprecated, kept because the database has not been updated
  const referrer = document.referrer;

  if (ip == "") {
    ip = await fetch("https://blalange.org/api/ip").then((res) => res.text());
  }

  // Only run if the url has changed
  if (lastUrl !== url) {
    lastUrl = url;

    let username;

    if (pb.authStore.isValid) {
      username = pb.authStore.model.username;
    }

    return await pb.collection("kf_analytics").create({
      useragent: userAgent,
      language: language,
      unix: unix,
      url: url,
      session: getSessionId(),
      ip: ip,
      width: screenWidth,
      height: screenHeight,
      network: networkInfo,
      referrer: referrer,
      username: username,
    });
  } else if (devMode) {
    console.log("Collect2: Nothing has changed, not running.");
  }
}

function startAnalyticsMonitoring() {
  if (typeof window === "undefined") return; // Exit if not in a browser environment

  // Set up MutationObserver to watch for changes in the document
  const observer = new MutationObserver(async () => {
    await collect2();
  });

  observer.observe(document, { childList: true, subtree: true });

  setInterval(async () => {
    await collect2();
  }, 1000); // Check every second
}
