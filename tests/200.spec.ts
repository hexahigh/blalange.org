import { test, expect } from "@playwright/test";

test("All nav links are 200", async ({ page }) => {
  await page.goto("/");

  // Find all a elements within the nav element, regardless of depth
  const navLinkHandles = await page.$$("nav a");
  
  console.log("Found " + navLinkHandles.length + " links in nav");

  // Collect href attributes first
  const hrefs = [];
  for (const linkHandle of navLinkHandles) {
    const href = await linkHandle.evaluate((link) => link.getAttribute('href'));
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