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

function validateUrl(url: string): boolean {
  let valid = true;
  if (url.startsWith("mailto:")) {
    valid = false;
  }

  return valid;
}
