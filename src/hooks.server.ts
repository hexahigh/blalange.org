import { defaultLocale, loadTranslations, locales } from "$lib/js/translations";

const localeExcludedRoutes: RegExp[] = [new RegExp("/api/.*"), new RegExp("/webring/.*|/webring")];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
}

export const handle: import('@sveltejs/kit').Handle = async ({ event, resolve }) => {
  const { url, request } = event;
  const { pathname } = url;

  // If domain is kukfest.eu then redirect to blalange.org
  if (url.hostname === "kukfest.eu") {
    return Response.redirect("https://blalange.org" + event.url.pathname, 301);
  }

  // If domain is www.blalange.org then redirect to blalange.org
  if (url.hostname === "www.blalange.org") {
    return Response.redirect("https://blalange.org" + event.url.pathname, 301);
  }

  // let response = resolve(event, {
  //   filterSerializedResponseHeaders: (key, value) => {
  //     return key.toLowerCase() === "content-type";
  //   },
  // });

  // Get defined locales
  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  // Try to get locale from `pathname`.
  let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

  // If route locale is not supported
  if (!locale && !localeExcludedRoutes.some((r) => r.test(pathname))) {
    // Get user preferred locale
    locale = `${`${request.headers.get("accept-language")}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();

    // Set default locale if user preferred locale does not match
    if (!supportedLocales.includes(locale)) locale = defaultLocale;

    // 301 redirect
    return new Response(undefined, { headers: { ...corsHeaders, location: `/${locale}${pathname}` }, status: 301 });
  }

  const response = await resolve(
    { ...event, locals: { lang: locale } },
    {
      transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
      filterSerializedResponseHeaders: (key, value) => {
        return key.toLowerCase() === "content-type";
      },
    }
  );

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

  // Add html `lang` attribute
  return response
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event }) => {
  const { locals } = event;
  const { lang } = locals;

  await loadTranslations(lang, "error");

  return
};