import { error } from '@sveltejs/kit';

export async function load({ request, params }) {

    error(451, 'Unavailable for Legal Reasons');

}