import { test, expect } from "@playwright/test";

test("post-install state", async ({ baseURL, page }) => {
  // Navigate to a page which registers a service worker.
  await page.goto("/");

  // await the navigator.serviceWorker.ready promise.
  const swURL = await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return registration.active?.scriptURL;
  });
  // Confirm the expected service worker script installed.
  expect(swURL).toBe(`${baseURL}/service-worker.js`);

  // Now you're ready to check cache or IndexedDB state.
});

test("service worker install caching", async ({ baseURL, page }) => {
  await page.goto("/");

  // Wait until the service worker has finished installing.
  const swURL = await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return registration.active?.scriptURL;
  });
  expect(swURL).toBe(`${baseURL}/service-worker.js`);

  const cacheContents = await page.evaluate(async () => {
    const cacheState = {};
    for (const cacheName of await caches.keys()) {
      const cache = await caches.open(cacheName);
      const reqs = await cache.keys();
      // Use the req.url string value, not an unserializable Request.
      // sort() allows the array to be used for stable comparisons.
      cacheState[cacheName] = reqs.map((req) => req.url).sort();
    }
    return cacheState;
  });

  // Assuming cacheContents is an object where keys are cache names and values are arrays of URLs
  const cacheNames = Object.keys(cacheContents);
  const hasMatchingCacheName = cacheNames.some((name) =>
    /^workbox-precache.*$/.test(name)
  );

  expect(hasMatchingCacheName).toBeTruthy();
});
