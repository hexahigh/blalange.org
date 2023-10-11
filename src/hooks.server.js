/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // If the URL ends with 'sw.js', redirect to the actual service worker file
    if (event.url.pathname.endsWith('sw.js')) {
        const response = await resolve(event);
        response.headers.set('Location', '/sw.js');
        response.status.set('301')
    }
  
    // Otherwise, continue with the normal request
	const response = await resolve(event);
	return response;
  }
  