import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute, createHandlerBoundToURL, cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

import { build, files, prerendered, version } from "$service-worker";

skipWaiting();
clientsClaim();

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

const excludes = [
  /.*_app\/immutable\/assets\/.*\.webp$/, // We exclude images here because we generate so many different formats and resolutions at build time,
  /.*_app\/immutable\/assets\/.*\.avif$/, // we later cache the ones that are actually used.
  /.*_app\/immutable\/assets\/.*\.jpeg$/,
  /.*_app\/immutable\/assets\/.*\.png$/,
  /.*\/vid\/.*$/,
  /.*\/img\/cat\/.*$/,
  /.*\/\.well-known\/.*$/,
  /.*_app\/immutable\/assets\/.*\.woff$/,
  /.*\/robots\.txt$/,
  /.*\/sitemap\.xml$/,
];

// Includes override excludes
const includes = [/.*\/img\/cat\/404.jpg$/, /.*\/img\/cat\/500.jpg$/];

// Function to check if a URL should be excluded
const shouldExclude = (url) => {
  return excludes.some((pattern) => pattern.test(url)) && !includes.some((pattern) => pattern.test(url));
};

const precache_list = [...build, ...files, ...prerendered]
  .filter((s) => !shouldExclude(s)) // Exclude URLs based on the patterns
  .map((s) => ({
    url: s,
    revision: version,
  }));

// Precache assets
precacheAndRoute(precache_list);

// clean old assets
cleanupOutdatedCaches();

registerRoute(
  ({ url }) => url.href.match(/^https:\/\/db\.blalange\.org\/assets\/.*$/),
  new StaleWhileRevalidate({
    cacheName: "directus-assets",
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        maxEntries: 500,
      }),
    ],
  })
);

registerRoute(
  ({ request, url }) => request.destination === "image" && url.origin === self.location.origin,
  new CacheFirst({
    cacheName: "origin-images",
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  })
);

// Default to `networkFirst` strategy for all other requests.
registerRoute(
  ({ event }) => event.request.mode === "navigate",
  new NetworkFirst({
    cacheName: "pages",
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          return await createHandlerBoundToURL("/index.html").handle({ event });
        } catch (error) {
          return Response.error();
        }
      })()
    );
  }
});
