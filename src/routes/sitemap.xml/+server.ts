import * as sitemap from 'super-sitemap';
import { config, defaultConfig } from "$lib/js/config";
import { getDirectusInstanceRest } from '$lib/js/directus';
import { readItems } from '@directus/sdk';

const client = getDirectusInstanceRest(null);

const site = "https://blalange.org";

const articles = async () => {
  try {
    let articles = await client.request(readItems('art_articles', {
      fields: [
        "art_id",
      ],
    }))
    // Return all ids
    return articles.map((article) => article.art_id);
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const GET = async ({ url }) => {
  return await sitemap.response({
    origin: url.origin,
    excludeRoutePatterns: [
      '/redirect/*',
    ],
    paramValues: {
      '/a/[slug]': await articles(),
    },
    headers: {
    },
    additionalPaths: [
    ],
    // changefreq: 'daily', // excluded by default b/c ignored by modern search engines
    // priority: 0.7, // excluded by default b/c ignored by modern search engines
    sort: 'alpha', // default is false; 'alpha' sorts all paths alphabetically.
    processPaths: (paths) => {
      // A callback to allow arbitrary processing of your path objects. See the
      // processPaths() section of the README.
      return paths;
    },
  });
};