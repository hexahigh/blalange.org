/** @type {import('./$types').RequestHandler} */

import { error } from '@sveltejs/kit';

export async function load({ request, params }) {

    
    return new Redirect(params.slug, 'Error test');

    throw error(params.slug, 'Error test');
}