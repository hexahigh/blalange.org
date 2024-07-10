import PocketBase from "pocketbase";
import { error } from "@sveltejs/kit";
import { marked } from "marked";

export async function load({ params, url }) {
  try {
    const pb = new PocketBase("https://db.080609.xyz");

    let articleId = params.slug;

    let article = await pb
      .collection("art_articles")
      .getFirstListItem('artId = "' + articleId + '"');

    if (!article) {
      error(404, "Article not found");
    }

    // Fetch the image
    const imgUrl = await pb.files.getUrl(article, article.image);

    article.date = new Date(article.date).getTime();

    // Process the markdown
    article.text = marked.parse(article.text);

    // Fetch the author names
    const authors = await Promise.all(
      article.authors.map(async (authorId) => {
        const author = await pb
          .collection("art_authors")
          .getFirstListItem('id = "' + authorId + '"');
        return author.name;
      })
    );

    return { article, authors, imgUrl };
  } catch (err) {
    console.error(err);
    error(500, err.message);
  }
}
