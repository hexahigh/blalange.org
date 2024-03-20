import { error } from '@sveltejs/kit'

export function load({ params }) {
	try {
		const post = import(`./${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
