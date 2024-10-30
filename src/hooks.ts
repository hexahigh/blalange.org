// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { i18n } from "$lib/i18n"

export const reroute = i18n.reroute()

export const handleError = async ({ event, error }) => {
    console.error(error);
    const stacktrace = error.stack || 'Stack trace unavailable';
    return {
      message: error.message,
      stacktrace: stacktrace
    }
  };