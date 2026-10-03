import { test , expect } from "@playwright/test";

test("Login Test", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator("#Email").fill("testuser@example.com");
    await page.locator("#Password").fill("Test123");
    await page.locator("input[type='submit']").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
});