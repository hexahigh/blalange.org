// src/hooks.js
export async function handle({ request, resolve }) {
    // If the URL ends with 'sw.js', redirect to the actual service worker file
    if (request.path.endsWith('sw.js')) {
      return {
        status: 301,
        headers: {
          location: '/sw.js',
        },
      };
    }
  
    // Otherwise, continue with the normal request
    return await resolve(request);
  }
  