/** @type {import('./$types').RequestHandler} */

import { error } from '@sveltejs/kit';

export async function load({ request, params }) {

    error(params.slug, 'Error test');
}