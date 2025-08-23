import { getDirectusInstance } from "$lib/js/directus";
import { readItems } from "@directus/sdk";
import { formatNames } from "$lib/js/util/text";
import { render } from "svelte/server";
// @ts-ignore - Svelte component import
import Renderer from "../(vanlig)/a/[slug]/renderer.svelte";
import type { ArticleLoaded } from "../(vanlig)/a/[slug]/types";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const client = getDirectusInstance(null);

  const articles = await client.request(
    readItems("art_articles", {
      limit: -1,
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

  const metadata = {
    title: "Blåblad",
    description: "Nyheter fra Blåblad",
    webmaster: "simon@blalange.org",
    link: `${url.origin}/articles`,
    updated: formatDateForAtom(new Date()),
    id: `${url.origin}/articles`,
  };

  const header = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>${metadata.title}</title>
    <link href="${metadata.link}" />
    <link href="${metadata.link}.atom" rel="self" type="application/atom+xml" />
    <updated>${metadata.updated}</updated>
    <id>${metadata.id}</id>
    <subtitle>${metadata.description}</subtitle>
    <author>
        <name>${metadata.webmaster}</name>
    </author>
    <icon>${url.origin}/favicon.png</icon>
    <logo>${url.origin}/favicon.png</logo>
`;

  const footer = `</feed>`;

  const content = articles
    .map((article) => {
      const authorNames = article?.authors?.map((author) => author?.art_authors_id?.name).filter(Boolean) || [];
      const formattedAuthors = formatNames(authorNames) || metadata.webmaster;
      const { body } = render(Renderer, { props: { article: article as ArticleLoaded } });
      const xmlCompliantBody = makeXmlCompliant(body);
      return `
    <entry>
        <title>${escapeXml(article.name)}</title>
        <link href="${url.origin}/a/${article.art_id}" />
        <id>${url.origin}/a/${article.art_id}</id>
        <updated>${formatDateForAtom(article.date)}</updated>
        <published>${formatDateForAtom(article.date)}</published>
        <summary type="text">${escapeXml(article.description)}</summary>
        <author>
            <name>${escapeXml(formattedAuthors)}</name>
        </author>
        <content type="html">${xmlCompliantBody}</content>
    </entry>`;
    })
    .join("");

  return new Response(`${header}${content}${footer}`, {
    headers: {
      "Content-Type": "application/atom+xml",
    },
  });
}

// Format date for Atom (ISO 8601)
function formatDateForAtom(date: string | Date): string {
  return new Date(date).toISOString();
}

// Escape XML special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Make HTML XML-compliant for Atom feeds
function makeXmlCompliant(html: string): string {
  // Fix self-closing tags that might not be properly closed
  return html
    .replace(/<(img|br|hr|input|meta|link|source)([^>]*?)(?<!\/)\s*>/gi, "<$1$2 />")
    .replace(/&(?!(?:amp|lt|gt|quot|#039|#x[\da-f]+|#\d+);)/gi, "&amp;");
}
