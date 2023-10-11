// src/hooks.js
export async function handle({ event, resolve }) {
    // If the URL ends with 'sw.js', redirect to the actual service worker file
    if (event.url.pathname('sw.js')) {
      return {
        status: 301,
        headers: {
          location: '/sw.js',
        },
      };
    }
  
    // Otherwise, continue with the normal request
	const response = await resolve(event);
	return response;
  }
  