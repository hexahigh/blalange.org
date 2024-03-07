/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    
    let ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');

    // Add cors headers
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    return new Response(ip, { headers });
}