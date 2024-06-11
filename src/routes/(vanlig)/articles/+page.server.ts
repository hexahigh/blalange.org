import PocketBase from "pocketbase";
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
    const pb = new PocketBase("https://db.080609.xyz");
    
    let articles = [];

    async function getArticles() {
        // Import all articles from the database
        articles = await pb.collection("art_articles").getFullList({
          fields:
            "name, date, description, image, artId, id, collectionId, collectionName  ",
        });
    
        for (let i = 0; i < articles.length; i++) {
          // Fetch the image
          let image = pb.files.getUrl(articles[i], articles[i].image);
          articles[i].image = image;
        }
      }

    getArticles();

    return { articles };
}
