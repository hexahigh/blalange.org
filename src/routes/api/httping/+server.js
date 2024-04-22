import axios from "axios";

export async function POST({ request }) {

    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    // Get current unix time
    let now = Date.now();

    let body = await request.json();
    let url = body.url;

    let jsonResponse = {
        url: url,
        headers: {},
        started: now,
        finished: 0,
        timeTaken: 0,
        success: false,
        statuscode: 0
    }

    // Send HEAD request
    try {
        let response = await axios.head(url, {timeout: 15000});
        jsonResponse.finished = Date.now();
        jsonResponse.timeTaken = Date.now() - now;
        jsonResponse.headers = response.headers;
        jsonResponse.statuscode = response.status;
        jsonResponse.success = true;
        return new Response(JSON.stringify(jsonResponse), { headers });
    } catch (error) {
        jsonResponse.finished = Date.now();
        jsonResponse.timeTaken = Date.now() - now;
        jsonResponse.statuscode = error.response.status;
        jsonResponse.success = false;
        return new Response(JSON.stringify(jsonResponse), { headers });
    }

}

export async function OPTIONS({ request }) {
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    return new Response(null, { headers });
}