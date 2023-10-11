/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // If the URL has a url settings thing then archive the page
  if (event.url.searchParams.has("archive")) {
    try {
      let inputUrl1 = encodeURIComponent(event.url);
      let inputUrl2 = event.url;

      // Archive to the Wayback Machine
      let response = await fetch(`https://web.archive.org/save/${inputUrl2}`, {
        body: `url=${inputUrl1}&capture_all=on`,
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("IA failed");
      }

      // Archive to archive.today
      response = await fetch(`https://archive.ph/submit/?url=${inputUrl2}`);
      if (!response.ok) {
        throw new Error("Today failed");
      }
    } catch (error) {
      return new Response(error);
    }
  }

  // Otherwise, continue with the normal request
  const response = await resolve(event);
  return response;
}
