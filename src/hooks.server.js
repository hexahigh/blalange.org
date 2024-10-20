/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // If domain is kukfest.eu then redirect to blalange.org
  if (event.url.hostname === "kukfest.eu") {
      return Response.redirect("https://blalange.org" + event.url.pathname, 301);
  }

  // If domain is www.blalange.org then redirect to blalange.org
  if (event.url.hostname === "www.blalange.org") {
      return Response.redirect("https://blalange.org" + event.url.pathname, 301);
  }

  const response = await resolve(event, {
    filterSerializedResponseHeaders: (key, value) => {
			return key.toLowerCase() === 'content-type';
		},
  })

  // Allow CORS requests from everywhere
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');

  return response;
}