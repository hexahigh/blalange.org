import { defaultConfig } from "$lib/js/config";
import { getDirectusInstance } from "$lib/js/directus";
import { readItems } from "@directus/sdk";
import { formatNames } from "$lib/js/util/text";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const client = getDirectusInstance(null);

  const articles = await client.request(
    readItems("art_articles", {
      fields: ["art_id", "name", "description", "image", "date", "text", "authors.art_authors_id.name"],
      limit: -1,
    })
  );

  const metadata = {
    title: "Blåblad",
    description: "Nyheter fra Blåblad",
    webmaster: "simon@blalange.org",
    link: `${url.origin}/articles`,
    lastBuildDate: formatDateForRSS(new Date()),
    pubDate: formatDateForRSS(articles[0].date),
  };

  const header = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>${metadata.title}</title>
            <link>${metadata.link}</link>
            <description>${metadata.description}</description>
            <language>nb-no</language>
            <lastBuildDate>${metadata.lastBuildDate}</lastBuildDate>
            <pubDate>${metadata.pubDate}</pubDate>
            <webMaster>${metadata.webmaster}</webMaster>
            <image>
                <title>${metadata.title}</title>
                <url>${url.origin}/favicon.png</url>
                <link>${metadata.link}</link>
            </image>
            <atom:link href="${metadata.link}.rss" rel="self" type="application/rss+xml" />
       `;

  const footer = `
        </channel>
    </rss>
    `;

  const content = articles
    .map((article) => {
      const authorNames = article?.authors?.map(author => author?.art_authors_id?.name).filter(Boolean) || [];
      const formattedAuthors = formatNames(authorNames) || metadata.webmaster;
      return `
            <item>
                <title>${article.name}</title>
                <link>${url.origin}/a/${article.art_id}</link>
                <description>${article.description}</description>
                <guid isPermaLink="false">${article.art_id}</guid>
                <pubDate>${formatDateForRSS(article.date)}</pubDate>
                <author>${escapeXml(formattedAuthors)}</author>
            </item>
            `;
    })
    .join("");

  return new Response(`${header}${content}${footer}`, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

// Pain
function formatDateForRSS(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const d = new Date(date);
  const day = days[d.getUTCDay()];
  const dateOfMonth = d.getUTCDate();
  const month = months[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  const hours = d.getUTCHours();
  const minutes = d.getUTCMinutes();
  const seconds = d.getUTCSeconds();

  // Calculate timezone offset in the format +HHMM or -HHMM
  const utcOffset = -d.getTimezoneOffset();
  const offsetSign = utcOffset > 0 ? "+" : "-";
  const offsetHours = Math.abs(Math.floor(utcOffset / 60))
    .toString()
    .padStart(2, "0");
  const offsetMinutes = Math.abs(utcOffset % 60)
    .toString()
    .padStart(2, "0");
  const timezoneOffset = `${offsetSign}${offsetHours}${offsetMinutes}`;

  // Pad single digit numbers with leading zeros
  const paddedDateOfMonth = String(dateOfMonth).padStart(2, "0");
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${day}, ${paddedDateOfMonth} ${month} ${year} ${paddedHours}:${paddedMinutes}:${paddedSeconds} ${timezoneOffset}`;
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
