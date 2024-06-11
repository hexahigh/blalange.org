import PocketBase from "pocketbase";
import { config, defaultConfig } from "$lib/js/config";

export async function load({ params, url }) {
  let pb = new PocketBase(defaultConfig.dbEndpoint);

  config.subscribe((value) => {
    pb = new PocketBase(value.dbEndpoint);
  });

  let articles = [];
  let errorOccurred = false;
  let errorMessage = "";

  async function getArticles() {
    // Import all articles from the database
    articles = await pb.collection("art_articles").getFullList({
      fields:
        "name, date, description, image, artId, id, collectionId, collectionName, hidden",
    });

    for (let i = 0; i < articles.length; i++) {
      // Fetch the image
      let image = pb.files.getUrl(articles[i], articles[i].image);
      articles[i].image = image;

      if (articles[i].hidden === true) {
        // Remove the article if it is hidden
        articles.splice(i, 1);
        i--;
      }
    }
  }

  try {
    await getArticles();
  } catch (error) {
    console.error(error);
    errorOccurred = true;
    errorMessage = error.message;
  }

  return { articles, errorOccurred, errorMessage };
}
