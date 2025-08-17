import PocketBase from "pocketbase";
import { config, defaultConfig } from "$lib/js/config";
import { readItems, readItem } from '@directus/sdk';
import { getDirectusInstance, getImageUrl } from "$lib/js/directus";

export async function load({ params, url, fetch }) {
  const urlParams = url.searchParams;
  const fakeError = urlParams.get("fe");
  const multiply = urlParams.get("m");
  const randomize = urlParams.get("r");
  const client = getDirectusInstance(fetch);

  let articles = [];
  let errorOccurred = false;
  let errorMessage = "";

  async function getArticles() {
    // Import all articles from the database
    articles = await client.request(readItems('art_articles', {
      fields: [
        "art_id",
        "name",
        "description",
        "image.*",
        "date",
        "date_updated",
        "authors.*",
        "author.*",
        "status"
      ],
    }))

    // Sort the articles by date
    articles.sort((a, b) => {
      return b.date - a.date;
    });

    // If multiply is set then duplicate the articles
    if (multiply) {
      for (let i = 0; i < multiply; i++) {
        articles = articles.concat(articles);
      }
    }

    // If randomize is set then shuffle the articles
    if (randomize) {
      for (let i = articles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [articles[i], articles[j]] = [articles[j], articles[i]];
      }
    }
  }

  try {
    if (fakeError) {
      throw new Error("Fake error");
    }
    await getArticles();
  } catch (error) {
    console.error(error);
    errorOccurred = true;
    errorMessage = error.message;
  }

  return { articles, errorOccurred, errorMessage };
}
