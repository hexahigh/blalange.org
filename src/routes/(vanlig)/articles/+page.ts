import PocketBase from "pocketbase";
import { config, defaultConfig } from "$lib/js/config";
import { readItems, readItem } from '@directus/sdk';
import { getDirectusInstanceRest, getImageUrl } from "$lib/js/directus";
import { locale } from "$lib/js/translations/main";
import { get } from "svelte/store";

export async function load({ params, url, fetch }) {
  const urlParams = url.searchParams;
  const fakeError = urlParams.get("fe");
  const multiply = urlParams.get("m");
  const randomize = urlParams.get("r");
  const client = getDirectusInstanceRest(fetch);

  let articles = [];
  let errorOccurred = false;
  let errorMessage = "";

  async function getArticles() {
    // Import all articles from the database
    articles = await client.request(readItems('art_articles', {
      fields: [
        "artId",
        "name",
        "description",
        "image",
        "date",
        "status",
        {
          "translations": ["languages_code", "name", "description"]
        }
      ],
    }))

    for (let i = 0; i < articles.length; i++) {
      if (articles[i].image === null) {
        articles[i].image = "";
      }
      if (articles[i].description === null) {
        articles[i].description = "";
      }

      // Fetch the image
      let image = getImageUrl(articles[i].image, {
        width: 512,
        format: "auto"
      });
      articles[i].image = image;

      articles[i].date = new Date(articles[i].date).getTime();

      // If the description is longer than 32 characters, truncate it
      if (articles[i].description.length > 3200) {
        articles[i].description = articles[i].description.slice(0, 32) + "...";
      }

      // If the article's status is "draft" or "archived", remove it from the list
      if (articles[i].status === "draft" || articles[i].status === "archived") {
        articles.splice(i, 1);
        i--;
      }
    }

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
