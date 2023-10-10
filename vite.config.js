import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      manifest: {}, // Disables automatic generation of manifest file
      // Other PWA options...
    }),
  ],
};

export default config;
