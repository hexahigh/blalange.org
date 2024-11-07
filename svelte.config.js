import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    files: {
      serviceWorker: "src/service-worker.js",
    },
    serviceWorker: {
      register: false,
    },
    csp: {
      mode: "auto",
      reportOnly: {
        "report-to": [
          "/api/csp-report",
          "https://blalange.org/api/csp-report",
        ]
      }
    },
    alias: {
      $root: "",
      $components: "src/lib/components",
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
