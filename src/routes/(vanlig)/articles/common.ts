import { config } from "$lib/js/config";
import { get } from "svelte/store";

type SearchAPIOptions = {
  query: string;
  /** MeiliSearch fields to sort by */
  meiliSort?: string[];
  limit?: number;
  offset?: number;
  /** MeiliSearch filter to use when searching */
  meiliFilter?: string;
  /** Fields to return from MeiliSearch */
  meiliFields?: string[];
  /** Fields to return from Directus */
  directusFields?: string[];
  /** Return relevance score from MeiliSearch */
  returnScore?: boolean;
  /** Return Meilisearch item */
  returnMeili?: boolean;
  /** Return Directus item */
  returnDirectus?: boolean;
  /** Return the article ID */
  returnId?: boolean;
  /** Search URL override */
  searchUrl?: string;
};

type SearchAPIResponse = {
  hits: { id?: string; score?: number; directus?: any; meilisearch?: any }[];
  estimatedTotalHits: number;
  limit: number;
  offset: number;
  processingTimeMs: number;
  query: string;
};

export async function searchAPI(
  options: SearchAPIOptions = { query: "", returnDirectus: true, returnId: true, returnMeili: true, returnScore: true }
): Promise<SearchAPIResponse> {
  // Build fetch request
  const params = new URLSearchParams();
  params.append("q", options.query);
  if (options.meiliSort) params.append("meiliSort", options.meiliSort.join(","));
  if (options.limit) params.append("limit", options.limit.toString());
  if (options.offset) params.append("offset", options.offset.toString());
  if (options.meiliFilter) params.append("meiliFilter", options.meiliFilter);
  if (options.meiliFields) params.append("meiliFields", options.meiliFields.join(","));
  if (options.directusFields) params.append("directusFields", options.directusFields.join(","));
  params.append("returnScore", options.returnScore ? "1" : "0");
  params.append("returnMeili", options.returnMeili ? "1" : "0");
  params.append("returnDirectus", options.returnDirectus ? "1" : "0");
  params.append("returnId", options.returnId ? "1" : "0");

  let searchUrl = get(config).directusEndpoint + "/x-search/articles";
  if (options.searchUrl) {
    searchUrl = options.searchUrl;
  }

  const response = await fetch(`${searchUrl}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Error fetching search results: ${response.statusText}`);
  }

  return response.json();
}

export function calculatePagination(currentPage: number, totalItems: number, itemsPerPage: number = 20) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return {
    totalPages,
    startItem,
    endItem,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  };
}
