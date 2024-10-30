import { getSessionId, getPersistentId } from "./session";
import { config } from "./config";
import { getDirectusInstance } from "./directus";
import { createItem } from "@directus/sdk";
import { afterNavigate, beforeNavigate } from "$app/navigation";
import { page as pageStore } from "$app/stores";
import { latestVersion } from "./version";
import type { Page } from "@sveltejs/kit";

const client = getDirectusInstance(null);

const analyticsVersion = "1.0";

let enabled: boolean;
let devMode: boolean;

config.subscribe((value) => {
  enabled = value.analyticsEnabled;
  devMode = value.devMode;
});

let page: Page<Record<string, string>, string | null>;

let ip = "";

async function collectInfo() {
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const url = window.location.href;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const referrer = document.referrer;
  const time = new Date().getTime();
  const localTime = time + new Date().getTimezoneOffset() * 60 * 1000;

  if (ip === "") {
    ip = await fetchIp();
  }

  return {
    userAgent,
    language,
    url,
    screenWidth,
    screenHeight,
    referrer,
    time,
    localTime,
  };
}

async function fetchIp(): Promise<string> {
  try {
    const response = await fetch("https://blalange.org/api/ip");
    return await response.text();
  } catch (error) {
    console.error("Failed to fetch IP:", error);
    return "";
  }
}

async function handleEvent(event: Event, type: string, additionalData = {}) {
  await handleRequest("event", {
    event_type: type,
    event_data: event,
    ...additionalData,
  });
}

async function handleRequest(type: string, additionalData = {}) {
  const info = await collectInfo();
  const urlDetails = {
    href: page.url.href,
    origin: page.url.origin,
    protocol: page.url.protocol,
    host: page.url.host,
    hostname: page.url.hostname,
    pathname: page.url.pathname,
    search: page.url.search,
    hash: page.url.hash,
    port: page.url.port,
  };
  await client.request(
    createItem("analytics_client2", {
      type: type,
      time: info.time,
      local_time: info.localTime,
      session_id: getSessionId(),
      persistent_id: getPersistentId(),
      ip: ip,
      data: {
        ...additionalData,
        info: {
          width: info.screenWidth,
          height: info.screenHeight,
          referrer: info.referrer,
          ip: ip,
          useragent: info.userAgent,
        },
        url_details: urlDetails,
        site_version: latestVersion.id,
        analytics_version: analyticsVersion,
      },
    })
  );
}

async function addOnClickListener() {
  // add a onClick listener to all buttons
  const buttons = document.querySelectorAll("button");
  const buttonArray = Array.from(buttons);
  for (let i = 0; i < buttonArray.length; i++) {
    const button = buttonArray[i];
    const buttonInfo = {
      id: button.id,
      className: button.className,
      textContent: button.textContent,
      ariaLabel: button.getAttribute("aria-label"),
      svelte_meta: (button as any).__svelte_meta,
    };
    button.addEventListener("click", (event) => handleEvent(event, "buttonClick", { button: buttonInfo }));
  }
}

async function init() {
  if (typeof window === "undefined") return; // Exit if not in a browser environment

  pageStore.subscribe((value) => {
    page = value;
  });

  addOnClickListener();

  window.addEventListener("error", (event) => handleEvent(event, "error"));
  window.addEventListener("load", (event) => handleEvent(event, "load"));
  window.addEventListener("beforeunload", (event) => handleEvent(event, "beforeunload"));

  beforeNavigate((navigation) => {
    handleRequest("beforenavigate", {
      ...navigation,
    });
  });

  afterNavigate((navigation) => {
    handleRequest("afternavigate", {
      ...navigation,
    });
    addOnClickListener();
  });

  handleRequest("init");
}

export { init };