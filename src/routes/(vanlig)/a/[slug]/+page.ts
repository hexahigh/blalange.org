import { error } from "@sveltejs/kit";
import { defaultConfig } from "$lib/js/config";
import { readItems, readItem } from "@directus/sdk";
import { getDirectusInstanceRest, getImageUrl } from "$lib/js/directus";

import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeStringify from "rehype-stringify";
import rehypeKatex from 'rehype-katex'
import { unified } from "unified";

export async function load({ params, url, fetch }) {
  try {
    const client = getDirectusInstanceRest(fetch);

    let articleId = params.slug;

    let articles = await client.request(
      readItems("art_articles", {
        filter: {
          artId: {
            _eq: articleId,
          },
        },
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

    article.date = new Date(article.date).getTime();

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
      .processSync(article.text || article.text_wysiwyg)

      let text = String(mdStuff)

      console.log(text);

    // Fetch the author names
    const authorObject = await client.request(readItem("art_authors", article.author));

    const author = authorObject.name;

    return { article, author, imgUrl, text };
  } catch (err) {
    console.error(err);
    error(500, err.message);
  }
}
