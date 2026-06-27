import { test, expect } from "@playwright/test";

test("Preview page loads", async ({ page }) => {
  await page.goto("/preview/home");

  await expect(page.getByRole("heading")).toBeVisible();

  await expect(page.getByRole("link")).toBeVisible();
});
