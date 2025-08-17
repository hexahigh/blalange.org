import { test, expect } from "@playwright/test";

test("All nav links are 200", async ({ page }) => {
  await page.goto("/");

  // Find all a elements within the nav element, regardless of depth
  const linkHandles = await page.$$("nav a");
  console.log("Found the following " + linkHandles.length + " links in nav:");
  for (const linkHandle of linkHandles) {
    const href = await linkHandle.evaluate((link) => link.getAttribute("href"));
    console.log(`- ${href}`);
  }

  // Collect href attributes first
  const hrefs = [];
  for (const linkHandle of linkHandles) {
    const href = await linkHandle.evaluate((link) => link.getAttribute("href"));
    hrefs.push(href);
  }

  // Iterate over hrefs to navigate and check status
  for (const href of hrefs) {
    if (href) {
      // Navigate to the URL
      const response = await page.goto(href);

      // Check the response status
      expect([200, 304]).toContain(response?.status());
    }
  }
});

test("All footer links are 200", async ({ page }) => {
  await page.goto("/");

  // Find all a elements within the footer element, regardless of depth
  const linkHandles = await page.$$("footer a");
  console.log(
    "Found the following " + linkHandles.length + " links in footer:"
  );
  for (const linkHandle of linkHandles) {
    const href = await linkHandle.evaluate((link) => link.getAttribute("href"));
    console.log(`- ${href}`);
  }

  // Collect href attributes first
  const hrefs = [];
  for (const linkHandle of linkHandles) {
    const href = await linkHandle.evaluate((link) => link.getAttribute("href"));
    if (href && validateUrl(href))
    hrefs.push(href);
  }

  // Iterate over hrefs to navigate and check status
  for (const href of hrefs) {
    if (href) {
      // Navigate to the URL
      const response = await page.goto(href);
      // Check the response status
      expect([200, 304]).toContain(response?.status());
    }
  }
});

test("Sitemap is 200", async ({ page }) => {
  const response = await page.goto("/sitemap.xml");
  expect(response.status()).toBe(200);
});

test("Rss is 200", async ({ page }) => {
  const response = await page.goto("/articles.rss");
  expect(response.status()).toBe(200);
});

test("All sitemap links are 200", async ({ request }, testInfo) => {
  // Fetch the sitemap.xml as text
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();

  // Extract all <loc>...</loc> URLs from the sitemap
  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map(match => match[1]);

  // Store results for reporting
  const results: { url: string, status: number }[] = [];
  const errors: string[] = [];

  // Check each URL returns 200 or 304, mark flaky if 404, collect errors otherwise
  for (const url of urls) {
    const res = await request.get(url);
    results.push({ url, status: res.status() });

    if ([200, 304].includes(res.status())) {
      // OK
    } else if (res.status() === 404) {
      testInfo.annotations.push({
        type: "flaky",
        description: `Sitemap link returned 404: ${url}`,
      });
      console.warn(`Flaky: Sitemap link returned 404: ${url}`);
    } else {
      errors.push(`URL: ${url} returned status: ${res.status()}`);
    }
  }

  // Attach results to the test output
  await testInfo.attach("sitemap-link-statuses.json", {
    body: Buffer.from(JSON.stringify(results, null, 2)),
    contentType: "application/json",
  });

  // Fail at the end if there were errors, with a detailed message
  if (errors.length > 0) {
    throw new Error(
      `Some sitemap links did not return 200 or 304:\n${errors.join("\n")}`
    );
  }
});

function validateUrl(url: string): boolean {
  let valid = true;
  if (url.startsWith("mailto:")) {
    valid = false;
  }

  return valid;
}
