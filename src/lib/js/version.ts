import version from "$lib/json/version.json";

export type Version = {
  id: string;
  name: string;
}


export const latestVersion: Version = version.versions[version.versions.length - 1];

//@ts-ignore
export const buildDate: string = __BUILD_DATE__;
//@ts-ignore
export const commitHash: string = __COMMIT_HASH__;
//@ts-ignore
export const commitDate: string = __COMMIT_DATE__;