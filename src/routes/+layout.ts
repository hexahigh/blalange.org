import { loadTranslations } from '$lib/js/translations/main';
import { defaultConfig, config } from '$lib/js/config';
import { get } from 'svelte/store';

export const load = async ({ url }) => {

  function initLocale(): string {
    const langFromParams = url.searchParams.get("lang");
    if (langFromParams) return langFromParams;
  
    const supportedLanguages = defaultConfig.translations.supportedLanguages;
    const localeFromHostname = url.hostname.split(".")[0];
  
    const matchingLanguage = supportedLanguages.find(lang => lang.code === localeFromHostname);
    if (matchingLanguage) return matchingLanguage.code;
  
    return defaultConfig.translations.defaultLocale;
  };

  await loadTranslations(initLocale(), url.pathname);

  return {};
}