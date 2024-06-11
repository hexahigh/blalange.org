const collections = import.meta.glob(
  "/node_modules/@iconify/json/json/*.json",
  {
    query: "?raw",
  }
);

export async function GET({ params, url }) {
  const urlParams = new URLSearchParams(url.searchParams);

  const iconsToSend = urlParams.get("icons");

  // Remove the.json extension from the slug (if it exists)
  params.slug = params.slug.replace(".json", "");

  // Await the promise to get the actual content
  const contentPromise =
    collections[`/node_modules/@iconify/json/json/${params.slug}.json`];
  if (!contentPromise) {
    // Handle the case where the specified slug doesn't match any files
    return new Response("Not Found", { status: 404 });
  }

  // Since contentPromise is a function that returns a promise, we call it to get the promise
  const content = await contentPromise();

  // Now content contains the raw JSON string, so we parse it to an object
  let jsonObject = JSON.parse(content.default);

  console.log(jsonObject);

  if (iconsToSend) {
    // Assuming iconsToSend is a comma-separated string of icon names
    const requestedIcons = iconsToSend.split(',');

    // Create a new object to hold the filtered icons
    let filteredIcons = {};

    // Iterate over each icon in the original jsonObject.icons object
    for (const iconName in jsonObject.icons) {
      // Check if the current icon name is included in the requestedIcons array
      if (requestedIcons.includes(iconName)) {
        // Add the icon to the filteredIcons object
        filteredIcons[iconName] = jsonObject.icons[iconName];
      }
    }

    // Replace the original icons object with the filtered one
    jsonObject.icons = filteredIcons;

    // Remove unneeded info
    delete jsonObject.info;
    delete jsonObject.aliases
    delete jsonObject.categories
    delete jsonObject.suffixes
  }

  // Return the JSON object as a response
  return new Response(JSON.stringify(jsonObject), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}