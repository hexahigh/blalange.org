import { sveltekit } from '@sveltejs/kit/vite';
/*import { SvelteKitPWA } from '@vite-pwa/sveltekit';*/

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    /*SvelteKitPWA({
      manifest: {
        name: 'Kukfest',
        short_name: 'Kukfest',
        start_url: '/',
        icons: [
          {
            src: '/img/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'  
          },
          {
            src: '/img/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      // Other PWA options...
    }),*/
  ],
};

export default config;
