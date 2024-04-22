/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
  // If domain is kukfest.eu then redirect to blalange.org
  if (request.url.hostname === "kukfest.eu") {
      return Response.redirect("https://blalange.org" + request.url.pathname, 301);
  }

  const response = await resolve(request);

  // Allow CORS requests from everywhere
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');

  return response;
}