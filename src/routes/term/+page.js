/** @type {import('./$types').PageLoad} */
export function load({ params, url }) {
    let commandToRun = url.searchParams.get("e") || "";
    return { commandToRun };
}
