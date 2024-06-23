import version from "$lib/json/version.json";

type latestVersion = {
  id: string;
  name: string;
}


export const latestVersion: latestVersion = version.versions[version.versions.length - 1];

//@ts-ignore
export const buildDate = __BUILD_DATE__
//@ts-ignore
export const commitHash = __COMMIT_HASH__;