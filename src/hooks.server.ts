import { addCORS } from '$lib/js/handles';
import { sequence } from '@sveltejs/kit/hooks'

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
  const err = error as Error;
  const stacktrace = err.stack || 'Stack trace unavailable';
  return {
    message: err.message,
  }
};

export const handle = sequence(handle1, addCORS)