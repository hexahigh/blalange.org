import { createDirectus, rest, authentication, realtime, readMe } from "@directus/sdk";
import { defaultConfig, config } from "./config";

class LocalStorage {
  get() {
    if (typeof window === "undefined") return
    return JSON.parse(localStorage.getItem("directus-data"));
  }
  set(data) {
    if (typeof window === "undefined") return
    localStorage.setItem("directus-data", JSON.stringify(data));
  }
}

const storage = new LocalStorage();

/**
 * Returns a Directus instance that uses the default config and endpoint.
 * The returned instance contains the authentication and rest plugins.
 *
 * @param {Function} fetch - The fetch function to use for network requests.
 * @return {Object} The Directus instance.
 */
function getDirectusInstance(fetch) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(defaultConfig.directusEndpoint, options)
    .with(authentication("json", { storage }))
    .with(rest());
  return directus;
}

/**
 * Returns a Directus instance that uses the default config and endpoint.
 * The returned instance contains the authentication plugin.
 *
 * @param {Function} fetch - The fetch function to use for network requests.
 * @return {Object} The Directus instance.
 */
function getDirectusInstanceAuth(fetch) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(defaultConfig.directusEndpoint, options).with(authentication("json", { storage }));
  return directus;
}

/**
 * Returns a Directus instance that uses the default config and endpoint.
 * The returned instance contains the rest plugin.
 * Note that this instance can only access public data as it lacks the authentication plugin.
 *
 * @param {Function} fetch - The fetch function to use for network requests.
 * @return {Object} The Directus instance.
 */
function getDirectusInstanceRest(fetch) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(defaultConfig.directusEndpoint, options).with(rest());
  return directus;
}

function isLoggedIn() {
  const data = storage.get();

  if (!data || !data.access_token || !data.expires_at) {
    return false;
  }

  if (data.access_token && data.expires_at > Date.now()) {
    return true;
  }

}

// Assumes that the refresh token is valid
function canRefresh() {
  const data = storage.get();
  if (!data || !data.refresh_token) {
    return false;
  }
  return true;
}

function currentUser() {
  const client = getDirectusInstance(null);

  return client.request(readMe());
}

function refreshToken() {
  const client = getDirectusInstance(null);
  if (storage.get().refresh_token) {
    return client.refresh();
  }
  return null;
}

type getImageUrlOptions = {
  width?: number;
  height?: number;
  format?: string;
  quality?: number;
  fit?: string;
  withoutEnlargement?: boolean;
};

/**
 * Returns a URL for the given asset ID.
 * Note that only public assets can be accessed.
 *
 * @param assetId
 * @param options See https://docs.directus.io/reference/files.html#custom-transformations for a list of options and their values
 * @returns
 */
function getImageUrl(assetId: string, options: getImageUrlOptions = {}): string {
  if (!assetId) return

  let url = `${defaultConfig.directusEndpoint}/assets/${assetId}`;
  
  // Add the query parameters
  let params = [];
  if (options.width) params.push(`width=${options.width}`);
  if (options.height) params.push(`height=${options.height}`);
  if (options.format) params.push(`format=${options.format}`);
  if (options.quality) params.push(`quality=${options.quality}`);
  if (options.fit) params.push(`fit=${options.fit}`);
  if (options.withoutEnlargement) params.push(`withoutEnlargement=${options.withoutEnlargement}`);

  if (params.length > 0) {
    url = `${url}?${params.join("&")}`;
  }

  return url;
}

function initKeepMeLoggedIn() {
    let devMode = false;
    config.subscribe((value) => {
        devMode = value.devMode;
      });

  async function keepMeLoggedIn() {
    config.subscribe(async (value) => {
      if (value.keepMeLoggedIn) {
        if (devMode) {
            console.log("Refreshing token because keepMeLoggedIn is enabled");
        }
        await refreshToken();
      }
    });
  }

  // Run once
  keepMeLoggedIn();

  setInterval(async () => {
    await keepMeLoggedIn();
  }, defaultConfig.keepMeLoggedInDelay);
}

export {
  getDirectusInstance,
  getDirectusInstanceRest,
  getDirectusInstanceAuth,
  getImageUrl,
  isLoggedIn,
  currentUser,
  refreshToken,
  initKeepMeLoggedIn,
  canRefresh,
  storage,
};
