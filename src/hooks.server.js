import blocked from './lib/json/blocked.json'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

  let ip = event.request.headers.get("CF-Connecting-IP");

  if (blocked.includes(ip) || event.url.searchParams.has("testBlock"))  {
    return {
      status: 418,
      body: "Im a teapot"
    };
  }

  const response = await resolve(event);

  return response;
}
