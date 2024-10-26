import { defaultConfig } from "../config";
import i18n from "sveltekit-i18n";
import type { ExtendedStore } from "./types";
import { get, derived } from "svelte/store";

import lang from "./languages/lang.json";

async function getTranslation(lc = defaultConfig.translations.defaultLocale) {
  // Import the specific language file
  const language = import(`./languages/${lc}.ts`);
  return language;
}

const ii8nConfig: import("sveltekit-i18n").Config = {
  fallbackLocale: defaultConfig.translations.defaultLocale,
  translations: {
    nb: { lang },
    en: { lang },
  },
  loaders: [
    {
      locale: "nb",
      key: "common",
      loader: async () => (await import("./languages/nb/common.json")).default,
    },
    {
      locale: "nb",
      key: "nav",
      loader: async () => (await import("./languages/nb/nav.json")).default,
    },
    {
      locale: "nb",
      key: "home",
      loader: async () => (await import("./languages/nb/home.json")).default,
    },
    {
      locale: "nb",
      key: "article",
      loader: async () => (await import("./languages/nb/article.json")).default,
    },
    {
      locale: "nb",
      key: "error",
      loader: async () => (await import("./languages/nb/error.json")).default,
    },
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./languages/en/common.json")).default,
    },
    {
      locale: "en",
      key: "nav",
      loader: async () => (await import("./languages/en/nav.json")).default,
    },
    {
      locale: "en",
      key: "home",
      loader: async () => (await import("./languages/en/home.json")).default,
    },
    {
      locale: "en",
      key: "article",
      loader: async () => (await import("./languages/en/article.json")).default,
    },
    {
      locale: "en",
      key: "error",
      loader: async () => (await import("./languages/en/error.json")).default,
    },
  ],
};

export const defaultLocale = defaultConfig.translations.defaultLocale;

export const { t, locale, locales, loading, translations, loadTranslations, addTranslations, setRoute, setLocale } =
  new i18n(ii8nConfig);


// Returns the URL with the current locale prepended
export const tu = {
  ...derived(
    [locale],
    ([$locale]) => (url) => get(locale) + url
  ),
  get: (url) => get(locale) + url,
};