import { sveltekit } from "@sveltejs/kit/vite";

import * as child from "child_process";

let commitHash = "0000000";
try {
  commitHash = child.execSync("git rev-parse --short HEAD").toString();
} catch (e) {
  console.log("Can't run git");
}

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
  ],
  define: {
    "process.env.NODE_ENV":
      process.env.NODE_ENV === "production" ? '"production"' : '"development"',

    __COMMIT_HASH__: JSON.stringify(commitHash),
    __BUILD_DATE__: JSON.stringify(new Date().getTime()),
  },
  // gz
  assetsInclude: ["**/*.gz"],
};

export default config;
