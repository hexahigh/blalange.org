import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import * as child from "node:child_process";

let commitHash = "0000000";
try {
  commitHash = child.execSync("git rev-parse --short HEAD").toString();
} catch (e) {
  console.log("Can't run git");
}

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    "process.env.NODE_ENV": process.env.NODE_ENV === "production" ? '"production"' : '"development"',

    __COMMIT_HASH__: JSON.stringify(commitHash),
    __BUILD_DATE__: JSON.stringify(new Date().getTime()),
  },

  test: {
    include: ["tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
