import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      strategies: 'generateSW',
      workbox: {
        maximumFileSizeToCacheInBytes: 20000000
      }
      // Other PWA options...
    }),
  ],
};

export default config;
