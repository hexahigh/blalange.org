import { error } from "@sveltejs/kit";
import { defaultConfig } from "$lib/js/config";
import { readItems, readItem } from "@directus/sdk";
import { getDirectusInstance, getImageUrl } from "$lib/js/directus";

import type { ArticleLoaded, DataType } from "./types";

export async function load({ params, url, fetch }) {
  try {
    const client = getDirectusInstance(fetch);

    let articleId = params.slug;

    let articles = await client.request(
      readItems("art_articles", {
        filter: {
          art_id: {
            _eq: articleId,
          },
        },
        limit: 1,
        fields: [
          "*",
          "translations.*",
          "author.*",
          "image.*",
          {
            blocks: [
              {
                item: ["*.*"],
              },
              "*",
            ],
          },
          {
            authors: ["*", "art_authors_id.*"],
          },
        ],
      })
    );

    let article = (articles[0] as ArticleLoaded)

    if (!article) {
      error(404, "Article not found");
    }

    return { article } as DataType;
  } catch (err) {
    console.error(err);
    error(500, err.message);
  }
}
