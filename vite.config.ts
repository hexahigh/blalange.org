import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import * as child from "node:child_process";

let commitHash = "0000000";
let commitDate = "";
try {
  commitHash = child.execSync("git rev-parse --short HEAD").toString();
  commitDate = child.execSync("git show --no-patch --format=%ci").toString();
} catch (e) {
  console.log("Failed to get info from git:", e);
}

export default defineConfig({
  plugins: [paraglide({ project: "./project.inlang", outdir: "./src/lib/paraglide" }), sveltekit()],
  define: {
    "process.env.NODE_ENV": process.env.NODE_ENV === "production" ? '"production"' : '"development"',

    __COMMIT_DATE__: JSON.stringify(new Date(commitDate).getTime()),
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __BUILD_DATE__: JSON.stringify(new Date().getTime()),
  },

  server: {
    // Set `host: true` if inside GitHub Codespaces to listen on all addresses,
    // see https://vitejs.dev/config/server-options.html#server-host
    host: !!process.env.CODESPACES,
  },

  test: {
    include: ["tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
