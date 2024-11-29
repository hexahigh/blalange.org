export function toRedirect(url: string, options = { noHost: false }): string {
  // Url encode the url
  const encodedUrl = encodeURIComponent(url);

  // Get current host
  let host: string;

  if (options.noHost) {
    host = "";
  } else {
    if (typeof window !== "undefined") {
      host = window.location.origin;
    } else {
      host = "https://blalange.org";
    }
  }

  return host + "/redirect/" + encodedUrl;
}
