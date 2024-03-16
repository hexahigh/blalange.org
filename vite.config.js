import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      /* other pwa options */  
    })
  ],
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV === 'production' 
      ? '"production"'
      : '"development"'
  }
};

export default config;
