import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { addCORS } from '$lib/js/handles';
import { sequence } from '@sveltejs/kit/hooks'

const localeExcludedRoutes: RegExp[] = [new RegExp("/api/.*"), new RegExp("/webring/.*|/webring")];

const handle1: import('@sveltejs/kit').Handle = async ({ event, resolve }) => {
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

  const response = await resolve(event,
    {
      filterSerializedResponseHeaders: (key, value) => {
        return key.toLowerCase() === "content-type";
      },
    }
  );

  // Add html `lang` attribute
  return response
};

/** @type {import('@sveltejs/kit').HandleServerError} */
export const handleError = async ({ event, error }) => {
  console.error(error);
  const stacktrace = error.stack || 'Stack trace unavailable';
  return {
    message: error.message,
    stacktrace: stacktrace
  }
};

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});


export const handle = sequence(paraglideHandle, handle1, addCORS)