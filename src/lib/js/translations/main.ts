import { defaultConfig } from "../config";
import i18n from "sveltekit-i18n";

async function getTranslation(lc = defaultConfig.translations.defaultLocale) {
  // Import the specific language file
  const language = import(`./languages/${lc}.ts`);
  return language;
}

const ii8nConfig: import("sveltekit-i18n").Config = {
  fallbackLocale: defaultConfig.translations.defaultLocale,
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
      locale: "fr",
      key: "common",
      loader: async () => (await import("./languages/fr/common.json")).default,
    },
    {
      locale: "fr",
      key: "nav",
      loader: async () => (await import("./languages/fr/nav.json")).default,
    }
  ],
};

export const { t, locale, locales, loading, loadTranslations, setLocale } = new i18n(ii8nConfig);
