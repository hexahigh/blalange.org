import PocketBase from "pocketbase";

import { defaultConfig } from "$lib/js/config";

let pb = new PocketBase(defaultConfig.dbEndpoint);

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  let articles = await pb.collection("art_articles").getFullList(100, {
    sort: "-created",
  });

  console.log(url);

  const metadata = {
    title: "Blåblad",
    description: "Nyheter fra Blåblad",
    link: `${url.origin}/articles`,
    lastBuildDate: formatDateForRSS(articles[0].date),
    pubDate: formatDateForRSS(articles[0].date),
  };

  const header = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>${metadata.title}</title>
            <link>${metadata.link}</link>
            <description>${metadata.description}</description>
            <language>nb</language>
            <lastBuildDate>${metadata.lastBuildDate}</lastBuildDate>
            <pubDate>${metadata.pubDate}</pubDate>
            <atom:link href="${metadata.link}.rss" rel="self" type="application/rss+xml" />
       `;

  const footer = `
        </channel>
    </rss>
    `;

  const content = articles
    .map((article) => {
      return `
            <item>
                <title>${article.name}</title>
                <link>${url.origin}/a/${article.artId}</link>
                <description>${article.description}</description>
                <guid isPermaLink="false">${article.artId}</guid>
                <pubDate>${formatDateForRSS(article.date)}</pubDate>
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
  const offsetSign = utcOffset > 0 ? '+' : '-';
  const offsetHours = Math.abs(Math.floor(utcOffset / 60)).toString().padStart(2, '0');
  const offsetMinutes = Math.abs(utcOffset % 60).toString().padStart(2, '0');
  const timezoneOffset = `${offsetSign}${offsetHours}${offsetMinutes}`;

  // Pad single digit numbers with leading zeros
  const paddedDateOfMonth = String(dateOfMonth).padStart(2, '0');
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${day}, ${paddedDateOfMonth} ${month} ${year} ${paddedHours}:${paddedMinutes}:${paddedSeconds} ${timezoneOffset}`;
}