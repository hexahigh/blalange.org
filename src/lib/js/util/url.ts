/**
 * Joins an array of URLs into a single URL.
 *
 * @param {...string} urls - The URLs to join
 * @returns {string} - The joined URL
 */
export function join(...urls: string[]): string {
    return urls
        .map((url, index) => {
            // Remove leading slashes from all URLs except the first one
            if (index > 0) {
                url = url.replace(/^\//, '');
            }
            // Remove trailing slashes from all URLs except the last one
            if (index < urls.length - 1) {
                url = url.replace(/\/$/, '');
            }
            return url;
        })
        .join('/');
}