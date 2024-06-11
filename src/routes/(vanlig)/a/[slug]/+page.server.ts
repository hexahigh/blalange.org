import PocketBase from "pocketbase";
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
    const pb = new PocketBase("https://db.080609.xyz");
    
    let articleId = params.slug;

    const article = await pb.collection("art_articles").getFirstListItem('artId = "' + articleId + '"');

    if (!article) {
        error(404, 'Article not found');
    }

    // Fetch the image
    const imgUrl = await pb.files.getUrl(article, article.image);

    // Fetch the author names
    const authors = await Promise.all(article.authors.map(async (authorId) => {
        const author = await pb.collection("art_authors").getFirstListItem('id = "' + authorId + '"');
        return author.name;
    }));

    return { article, authors, imgUrl };
}
