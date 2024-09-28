import { test, expect } from "@playwright/test";

test("correct header links", async ({ page }) => {
  await page.goto("/");

  expect(
    await page.getByText("Artikler", { exact: true }).getAttribute("href")
  ).toBe("/articles");

  expect(
    await page.getByText("Hjem", { exact: true }).getAttribute("href")
  ).toBe("/");
});

test("root is 200", async ({ page }) => {

  const response = await page.goto("/");
  expect(response.status()).toBe(200);
})