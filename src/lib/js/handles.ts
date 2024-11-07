import type { Handle } from "@sveltejs/kit";

const addCORS: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  response.headers.append("Access-Control-Allow-Origin", "*");
  response.headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  return response;
};

export { addCORS };
