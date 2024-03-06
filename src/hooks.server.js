/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // If domain is kukfest.eu then redirect to blalange.org
  if (event.url.hostname === "kukfest.eu") {
    return Response.redirect("https://blalange.org" + event.url.pathname, 301);
  }
  const response = await resolve(event);
  return response;
}
