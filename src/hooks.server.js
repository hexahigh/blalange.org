/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  let ip = event.request.headers.get("CF-Connecting-IP");
  let blocked = ["84.215.200.49"];

  if (blocked.includes(ip)) {
    return new Response("Haha get blocked");
  }

  const response = await resolve(event);

  return response;
}
