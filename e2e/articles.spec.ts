import { test, expect } from "@playwright/test";

test("test article is 200", async ({ page }) => {
  const response = await page.goto("/a/test-2212");

  expect(response.status()).toBe(200);
});
