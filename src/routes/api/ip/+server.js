/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
    
    let ip = request.headers.get('x-forwarded-for') || request.headers.get('remote_addr');

    return new Response(ip);
}