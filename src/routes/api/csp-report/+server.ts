import { getDirectusInstance } from "$lib/js/directus";
import { createItem, staticToken } from "@directus/sdk";

const key = import.meta.env.VITE_DIRECTUS_KEY_REPORT;

export async function POST({ request, fetch }: any) {
  let client = getDirectusInstance(fetch).with(staticToken(key));

  let body = await request.json();

  try {
    const result = await client.request(
      createItem("report_to", {
        url: body.url || body["csp-report"].url,
        type: body.type,
        age: body.age,
        body: body,
      })
    );

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error processing CSP report:", error);
    return new Response(null, { status: 500 });
  }
}
