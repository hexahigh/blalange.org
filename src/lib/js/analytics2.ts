import { getSessionId, getPersistentId } from "./session";
import { config } from "./config";
import { getDirectusInstance } from "./directus";
import { createItem } from "@directus/sdk";
import { afterNavigate, beforeNavigate } from "$app/navigation";
import { page as pageStore } from "$app/stores";
import { latestVersion } from "./version";
import type { Page } from "@sveltejs/kit";
import { fingerprint, botd } from "$lib/stores/info";
import { get } from "svelte/store";
import type { GetResult } from "@fingerprintjs/fingerprintjs";
import { getPostgresTimestamp, getPostgresTimestamptz } from "./util/time";

const client = getDirectusInstance(null);

const analyticsVersion = "2.0";

let enabled: boolean;
let devMode: boolean;

config.subscribe((value) => {
  enabled = value.analyticsEnabled;
  devMode = value.devMode;
});

let page: Page<Record<string, string>, string | null>;

let ip = "";
let ipFailures = 0;

async function collectInfo() {
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const url = window.location.href;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const referrer = document.referrer;

  const time = getPostgresTimestamptz();
  const localTime = getPostgresTimestamp();

  if (ip === "" && ipFailures < 5) {
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
    ipFailures++;
    if (ipFailures >= 5) {
      console.error("Too many IP fetch failures, giving up.");
    }
    return "";
  }
}

/**
 * Handle an event. The event data is added to the payload, and additional data can be passed in the third argument.
 * @param event The event that was triggered.
 * @param type The type of event (e.g. "visibilitychange").
 * @param additionalData Additional data to be added to the payload.
 */
async function handleEvent(event: Event, type: string, additionalData = {}) {
  let extraData: any = {};
  switch (type) {
    case "visibilitychange":
      extraData.visible = document.visibilityState === "visible";
      extraData.visibilityState = document.visibilityState;
      break;
  }
  await handleRequest("event", {
    event_type: type,
    event_data: event,
    event_data_extra: extraData, // Contains event specific data
    ...additionalData,
  });
}

/**
 * Handles a request to send analytics data to the server.
 * @param type The type of request (e.g. "pageview").
 * @param additionalData Additional data to be added to the payload.
 */
async function handleRequest(type: string, additionalData = {}, options = { muchData: false }) {
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
      visitor_id: (await getFingerprint(false))?.visitorId,
      ip: ip,
      version: analyticsVersion,
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
        botd: await getBotd(options.muchData),
        fingerprint: await getFingerprint(options.muchData),
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

async function getBotd(components: boolean) {
  let obj = {
    bot: get(botd).detect().bot,
    ...get(botd),
  };
  if (!components) {
    delete obj.components;
  }
  return obj;
}

async function getFingerprint(components: boolean): Promise<GetResult> {
  let obj = {
    ...(await get(fingerprint).get()),
  };
  if (!components) {
    delete obj.components;
  }
  return obj;
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
  window.addEventListener("visibilitychange", (event) => handleEvent(event, "visibilitychange"));

  /*   beforeNavigate((navigation) => {
    handleRequest("beforenavigate", {
      ...navigation,
    });
  }); */

  afterNavigate((navigation) => {
    handleRequest("afternavigate", {
      ...navigation,
    });
    addOnClickListener();
  });

  handleRequest("init", {}, { muchData: true });
}

export { init };
