import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute: Reroute = (request) => {
	return deLocalizeUrl(request.url).pathname;
};

export const handleError = async ({ event, error }) => {
    console.error(error);
    const stacktrace = error.stack || 'Stack trace unavailable';
    return {
      message: error.message,
      stacktrace: stacktrace
    }
  };