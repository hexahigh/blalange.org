import { loadTranslations } from '$lib/js/translations/main';
import { defaultConfig, config } from '$lib/js/config';
import { get } from 'svelte/store';

export const load = async ({ url }) => {
  const { pathname } = url;

  let initLocale = defaultConfig.translations.defaultLocale;

  await loadTranslations(initLocale, pathname);

  return {};
}