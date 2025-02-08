import { error } from "@sveltejs/kit";
import { defaultConfig } from "$lib/js/config";
import { readItems, readItem } from "@directus/sdk";
import { getDirectusInstance, getImageUrl } from "$lib/js/directus";

import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeStringify from "rehype-stringify";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";

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
        fields: ["*", "translations.*", "author.*"],
      })
    );

    let article = articles[0];

    if (!article) {
      error(404, "Article not found");
    }

    // Fetch the image
    const imgUrl = getImageUrl(article.image, {
      format: "auto",
    });

    let text = "";
    let translations = {};

    switch (article.type) {
      case "markdown": {
        const markedOptions = {
          breaks: true,
          gfm: true,
          sanitize: false,
        };
        // Process the markdown
        let mdStuff = unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(remarkGfm)
          .use(remarkMath)
          .use(rehypeStringify)
          .use(rehypeKatex)
          .use(rehypeHighlight)
          .use(rehypeSlug);

        text = mdStuff.processSync(article.text || article.text_wysiwyg).toString();

        translations = article.translations.reduce((acc, translation) => {
          acc[translation.languages_code] = {
            name: translation.name,
            description: translation.description,
            text: mdStuff.processSync(translation.text),
          };
          return acc;
        }, {});
        break;
      }
      case "block": {
        // Process the blocks
        translations = article.translations.reduce((acc, translation) => {
          if (translation.block) {
            acc[translation.languages_code] = {
              name: translation.name,
              description: translation.description,
              text: translation.block,
            };
          } else {
            acc[translation.languages_code] = {
              name: translation.name,
              description: translation.description,
              text: "",
            };
          }
          return acc;
        }, {});
        break;
      }
    }

    const author = article.author?.name;

    return { article, author, imgUrl, text, translations };
  } catch (err) {
    console.error(err);
    error(500, err.message);
  }
}
