import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

skipWaiting();
clientsClaim();

// Precache assets
precacheAndRoute(self.__WB_MANIFEST);

// Default to `networkFirst` strategy for all other requests.
registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages',
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
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          return await createHandlerBoundToURL('/index.html').handle({ event });
        } catch (error) {
          return Response.error();
        }
      })()
    );
  }
});
