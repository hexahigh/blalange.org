import { error } from "@sveltejs/kit";
import { marked } from "marked";
import { defaultConfig } from "$lib/js/config";
import { readItems, readItem } from '@directus/sdk';
import { getDirectusInstanceRest, getImageUrl } from "$lib/js/directus";

export async function load({ params, url, fetch }) {
  try {
    const client = getDirectusInstanceRest(fetch);

    let articleId = params.slug;

    let articles = await client.request(readItems('art_articles', {
      filter: {
        artId: {
          _eq: articleId
        }
      }
    }));

    let article = articles[0];

    if (!article) {
      error(404, "Article not found");
    }

    // Fetch the image
    const imgUrl = getImageUrl(article.image, {
      format: "auto",
    });

    article.date = new Date(article.date).getTime();

    // Process the markdown
    article.text = marked.parse(article.text);

    // Fetch the author names
    const authorObject = await client.request(readItem('art_authors', article.author));

    const author = authorObject.name;

    return { article, author, imgUrl };
  } catch (err) {
    console.error(err);
    error(500, err.message);
  }
}
