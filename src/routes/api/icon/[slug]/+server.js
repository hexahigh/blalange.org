const collections = import.meta.glob(
  "/node_modules/@iconify/json/json/*.json",
  {
    query: "?raw",
  }
);

export async function GET({ params }) {
  // Remove the .json extension from the slug (if it exists)
  params.slug = params.slug.replace(".json", "");
  
  // Await the promise to get the actual content
  const contentPromise = collections[`/node_modules/@iconify/json/json/${params.slug}.json`];
  if (!contentPromise) {
    // Handle the case where the specified slug doesn't match any files
    return new Response('Not Found', { status: 404 });
  }

  // Since contentPromise is a function that returns a promise, we call it to get the promise
  const content = await contentPromise();

  // Now content contains the raw JSON string, so we parse it to an object
  const jsonObject = JSON.parse(content.default);

  // Return the JSON object as a response
  return new Response(JSON.stringify(jsonObject), { status: 200, headers: { 'Content-Type': 'application/json' }});
}