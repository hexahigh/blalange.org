/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // If the URL has a url settings thing then archive the page
  if (event.url.searchParams.has("archive")) {
    try {
      let inputUrl = event.url;

      if (event.url.searchParams.has("ia")) {
      // Archive to the Wayback Machine
        archiveIA(inputUrl)
    }

    if (event.url.searchParams.has("today")) {
      // Archive to archive.today
      archiveToday(inputUrl)
    } else {

    }
  } catch (error) {
    return new Response(error);
  }
}
  // Otherwise, continue with the normal request
  const response = await resolve(event);
  return response;
}


async function archiveToday(url) {
    await fetch(`https://archive.ph/submit/?url=${url}`);
}

async function archiveIA(url) {
    await fetch(`https://web.archive.org/save/${url}`, {
        body: `url=${encodeURIComponent(url)}&capture_all=on`,
        method: "POST",  
      });
}