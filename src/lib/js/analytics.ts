import { getSessionId, getPersistentId } from "./session";
import { config, defaultConfig } from "./config";
import { getDirectusInstance } from "./directus";
import { createItem } from "@directus/sdk";

const client = getDirectusInstance(null);

let enabled: boolean;
let devMode: boolean;

config.subscribe((value) => {
  enabled = value.analyticsEnabled;
  devMode = value.devMode;
});

let lastUrl = typeof window !== "undefined" ? "" : "";

let ip = "";
let ipFailures = 0;
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
  const referrer = document.referrer;

  if (ip == "" && ipFailures < 5) {
    ip = await fetch("https://blalange.org/api/ip").then((res) => res.text()).catch((error) => {
      console.error("Failed to fetch IP:", error);
      ipFailures++;
      if (ipFailures >= 5) {
        console.error("Too many IP fetch failures, giving up.");
      }
      return "";
    })
  }

  // Only run if the url has changed
  if (lastUrl !== url) {
    lastUrl = url;

    return await client.request(createItem("analytics_client1", {
      useragent: userAgent,
      language: language,
      unix: unix,
      datetime: unix,
      timestamp: unix,
      url: url,
      sessionId: getSessionId(),
      persistentId: getPersistentId(),
      ip: ip,
      width: screenWidth,
      height: screenHeight,
      referrer: referrer,
    }))

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
