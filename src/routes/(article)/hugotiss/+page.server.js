import { error } from '@sveltejs/kit';

export async function load({ request, params }) {

    throw error(410);

}