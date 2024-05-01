export function toRedirect(url) {
    // Url encode the url
    const encodedUrl = encodeURIComponent(url);

    // Get current host
    let host

    if (typeof window !== "undefined") {
        host = window.location.origin;
    } else {
        host = "https://blalange.org";
    }

    return host + "/redirect/" + encodedUrl
}