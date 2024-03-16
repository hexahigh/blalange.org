import { error } from '@sveltejs/kit';

export async function load({ request, params }) {

    throw error(451, 'Unavailable for Legal Reasons');

}