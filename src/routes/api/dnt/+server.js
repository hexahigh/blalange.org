/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {

    let dnt = false
    
    if (request.headers.get('dnt') === '1' || request.headers.get('sec-gpc') === '1') {
        dnt = true
    }

    // Add cors headers
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    return new Response(dnt, { headers });
}