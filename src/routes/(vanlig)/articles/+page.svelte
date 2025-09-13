<script lang="ts">
  import "iconify-icon";
  import { MetaTags } from "svelte-meta-tags";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  import { getImageUrl } from "$root/src/lib/js/directus";
  import ArticleCard from "./card.svelte";
  import { searchAPI, calculatePagination } from "./common";

  interface Props {
    data: { 
      articles: any[]; 
      totalCount: number;
      currentPage: number;
      searchQuery: string;
      showHidden: boolean;
      showDrafts: boolean;
      showArchived: boolean;
      errorOccurred: boolean; 
      errorMessage: string 
    };
  }

  let { data }: Props = $props();

  // State management
  let searchTerm = $state(data.searchQuery);
  let isSearching = $state(false);
  let isLoadingPage = $state(false);
  let articles = $state(data.articles);
  let totalCount = $state(data.totalCount);
  let currentPage = $state(data.currentPage);

  let searchOptions = $state({
    showHidden: data.showHidden,
    showDrafts: data.showDrafts,
    showArchived: data.showArchived,
  });

  let displayOptions = $state({
    showFeatured: !data.searchQuery, // Only show featured when not searching
  });

  // Computed pagination info
  let paginationInfo = $derived(calculatePagination(currentPage, totalCount, 20));

  // Search timeout for debouncing
  let searchTimeout: NodeJS.Timeout;

  // Update URL with current state
  function updateURL() {
    if (!browser) return;
    
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (currentPage > 1) params.set("page", currentPage.toString());
    if (searchOptions.showHidden) params.set("showHidden", "true");
    if (searchOptions.showDrafts) params.set("showDrafts", "true");
    if (searchOptions.showArchived) params.set("showArchived", "true");

    const newPath = `/articles${params.toString() ? `?${params.toString()}` : ""}`;
    goto(newPath, { replaceState: true, noScroll: true, keepFocus: true });
  }

  // Load articles for a specific page
  async function loadArticles(page: number, query: string = "", resetFeatured: boolean = false) {
    isLoadingPage = true;
    
    try {
      // Build filter based on options
      let filters = [];
      if (!searchOptions.showHidden && !searchOptions.showDrafts && !searchOptions.showArchived) {
        filters.push('status="published"');
      } else {
        const statusFilters = [];
        statusFilters.push('status="published"');
        if (searchOptions.showHidden) statusFilters.push('status="hidden"');
        if (searchOptions.showDrafts) statusFilters.push('status="draft"');
        if (searchOptions.showArchived) statusFilters.push('status="archived"');
        filters.push(`(${statusFilters.join(" OR ")})`);
      }

      const response = await searchAPI({
        query: query,
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
      currentPage = page;

      if (resetFeatured) {
        displayOptions.showFeatured = !query;
      }
      
      updateURL();
    } catch (error) {
      console.error("Error loading articles:", error);
    } finally {
      isLoadingPage = false;
    }
  }

  // Handle search with debouncing
  async function handleSearch(term: string) {
    searchTerm = term.trim();

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Reset to page 1 for new searches
    currentPage = 1;

    // Reset to show all articles if search is empty
    if (!searchTerm || searchTerm.length < 3) {
      displayOptions.showFeatured = true;
      await loadArticles(1, "", true);
      return;
    }

    // Debounce the search
    searchTimeout = setTimeout(async () => {
      isSearching = true;
      displayOptions.showFeatured = false;

      try {
        await loadArticles(1, searchTerm, true);
      } finally {
        isSearching = false;
      }
    }, 300);
  }

  // Handle pagination
  async function goToPage(page: number) {
    if (page < 1 || page > paginationInfo.totalPages || page === currentPage) return;
    await loadArticles(page, searchTerm);
  }

  // Handle filter changes
  async function handleFilterChange() {
    // Reset to page 1 when filters change
    currentPage = 1;
    await loadArticles(1, searchTerm);
  }

  // Generate page numbers for pagination
  function getPageNumbers() {
    const total = paginationInfo.totalPages;
    const current = currentPage;
    const delta = 2;
    
    let pages: (number | string)[] = [];
    
    // Always show first page
    pages.push(1);
    
    // Add ellipsis if there's a gap
    if (current - delta > 2) {
      pages.push("...");
    }
    
    // Add pages around current page
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      pages.push(i);
    }
    
    // Add ellipsis if there's a gap
    if (current + delta < total - 1) {
      pages.push("...");
    }
    
    // Always show last page (if total > 1)
    if (total > 1) {
      pages.push(total);
    }
    
    return pages;
  }
</script>

<MetaTags
  title="Blåblad"
  titleTemplate="%s | Blålange"
  description="Nyhetssiden til Blålange festivalen"
  canonical="https://blalange.org/articles/"
  openGraph={{
    url: "https://blalange.org/articles",
    title: "Blåblad | Blålange",
    description: "Nyhetssiden til Blålange festivalen",
    images: [
      {
        url: "https://blalange.org/img/favicon.png",
        width: 300,
        height: 300,
        alt: "Blålange logo",
      },
    ],
    siteName: "Blålange festivalen",
  }}
/>

<div class="my-4">
  {#if !data.errorOccurred}
    <div class="mx-auto max-w-2xl">
      <label class="input flex mx-auto items-center mb-4" style="--input-color: var(--color-primary)">
        <span class="icon-[mdi--search] h-5 w-5"></span>
        <input
          type="search"
          placeholder="Søk etter artikler..."
          value={searchTerm}
          oninput={(e) => handleSearch((e.target as HTMLInputElement).value)}
          class="grow"
        />
        {#if isSearching}
          <span class="loading loading-spinner loading-sm"></span>
        {/if}
      </label>

      <!-- Search options -->
      <details class="collapse collapse-arrow bg-base-200 mb-4">
        <summary class="collapse-title text-sm font-medium"> Filterinnstillinger </summary>
        <div class="collapse-content">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Vis skjulte artikler</span>
              <input 
                type="checkbox" 
                bind:checked={searchOptions.showHidden} 
                class="checkbox checkbox-primary checkbox-sm" 
                onchange={handleFilterChange}
              />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Vis utkast</span>
              <input 
                type="checkbox" 
                bind:checked={searchOptions.showDrafts} 
                class="checkbox checkbox-primary checkbox-sm" 
                onchange={handleFilterChange}
              />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Vis arkiverte artikler</span>
              <input 
                type="checkbox" 
                bind:checked={searchOptions.showArchived} 
                class="checkbox checkbox-primary checkbox-sm" 
                onchange={handleFilterChange}
              />
            </label>
          </div>
        </div>
      </details>
    </div>

    <!-- Loading indicator -->
    {#if isLoadingPage}
      <div class="flex justify-center my-8">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    {:else if articles.length > 0}
      <!-- Articles grid -->
      <div class="w-full flex justify-center">
        <div class="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each articles as article, i (article.art_id)}
            <div class="{i === 0 && displayOptions.showFeatured ? 'md:col-span-2' : ''} flex">
              <ArticleCard
                title={article.name}
                date={article.date}
                link={"/a/" + article.art_id}
                image={{
                  src: getImageUrl(article.image.id, {
                    width: 1000,
                    format: "auto",
                  }),
                  width: article.image.width,
                  height: article.image.height,
                }}
                featured={i === 0 && displayOptions.showFeatured}
                class="w-full"
              />
            </div>
          {/each}
        </div>
      </div>

      <!-- Pagination -->
      {#if paginationInfo.totalPages > 1}
        <div class="flex flex-col items-center mt-8 gap-4">
          <!-- Results info -->
          <div class="text-sm text-base-content/70">
            Viser {paginationInfo.startItem}-{paginationInfo.endItem} av {totalCount} artikler
          </div>

          <!-- Pagination controls -->
          <div class="join">
            <!-- Previous button -->
            <button 
              class="join-item btn btn-sm"
              class:btn-disabled={!paginationInfo.hasPrevPage}
              onclick={() => goToPage(currentPage - 1)}
              disabled={!paginationInfo.hasPrevPage}
            >
              «
            </button>

            <!-- Page numbers -->
            {#each getPageNumbers() as pageNum}
              {#if pageNum === "..."}
                <span class="join-item btn btn-sm btn-disabled">...</span>
              {:else}
                <button 
                  class="join-item btn btn-sm"
                  class:btn-active={pageNum === currentPage}
                  onclick={() => goToPage(pageNum as number)}
                >
                  {pageNum}
                </button>
              {/if}
            {/each}

            <!-- Next button -->
            <button 
              class="join-item btn btn-sm"
              class:btn-disabled={!paginationInfo.hasNextPage}
              onclick={() => goToPage(currentPage + 1)}
              disabled={!paginationInfo.hasNextPage}
            >
              »
            </button>
          </div>
        </div>
      {/if}
    {:else if searchTerm}
      <div class="mx-auto text-center flex flex-col justify-center items-center">
        <h2 class="text-2xl">Ingen artikler funnet</h2>
        <iconify-icon icon="ooui:article-not-found-ltr" width="80" height="80" class="text-blue-500"></iconify-icon>
        <p>Prøv å søke etter noe annet</p>
      </div>
    {:else}
      <div class="mx-auto text-center flex flex-col justify-center items-center">
        <p>Ingen artikler å vise</p>
      </div>
    {/if}
  {:else}
    <div class="mx-auto text-center flex flex-col justify-center items-center">
      <h2 class="text-2xl">En feil oppsto</h2>
      <iconify-icon icon="svg-spinners:wifi-fade" width="80" height="80" class="text-red-500"></iconify-icon>
      <p>{data.errorMessage}</p>
    </div>
  {/if}
</div>
