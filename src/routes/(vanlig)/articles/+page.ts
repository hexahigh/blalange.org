import { searchAPI } from "./common";

export async function load({ params, url, fetch }) {
  const urlParams = url.searchParams;
  const fakeError = urlParams.get("fe");
  
  // Extract pagination and search parameters from URL
  const page = parseInt(urlParams.get("page") || "1");
  const searchQuery = urlParams.get("q") || "";
  const showHidden = urlParams.get("showHidden") === "true";
  const showDrafts = urlParams.get("showDrafts") === "true";
  const showArchived = urlParams.get("showArchived") === "true";

  let articles = [];
  let totalCount = 0;
  let errorOccurred = false;
  let errorMessage = "";

  async function getInitialArticles() {
    // Build filter based on options
    let filters = [];
    if (!showHidden && !showDrafts && !showArchived) {
      filters.push('status="published"');
    } else {
      const statusFilters = [];
      statusFilters.push('status="published"');
      if (showHidden) statusFilters.push('status="hidden"');
      if (showDrafts) statusFilters.push('status="draft"');
      if (showArchived) statusFilters.push('status="archived"');
      filters.push(`(${statusFilters.join(" OR ")})`);
    }

    const response = await searchAPI({
      query: searchQuery,
      limit: 20,
      offset: (page - 1) * 20,
      returnDirectus: true,
      returnMeili: false,
      meiliSort: ['date:desc'],
      meiliFilter: filters.join(" AND "),
      directusFields: [
        "id",
        "art_id",
        "name", 
        "description",
        "image.*",
        "date",
        "date_updated",
        "authors.*",
        "author.*",
        "status"
      ]
    });

    articles = response.hits?.map(hit => hit.directus) || [];
    totalCount = response.estimatedTotalHits || 0;
  }

  try {
    if (fakeError) {
      throw new Error("Fake error");
    }
    await getInitialArticles();
  } catch (error) {
    console.error(error);
    errorOccurred = true;
    errorMessage = error.message;
  }

  return { 
    articles, 
    totalCount,
    currentPage: page,
    searchQuery,
    showHidden,
    showDrafts, 
    showArchived,
    errorOccurred, 
    errorMessage 
  };
}
