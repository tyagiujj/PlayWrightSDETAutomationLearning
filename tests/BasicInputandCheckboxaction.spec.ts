import { test, expect } from "@playwright/test";

test("Verify title and form fields", async ({ page }) => {

    // Open application
    await page.goto("https://testautomationpractice.blogspot.com/", {
        waitUntil: "domcontentloaded"
    });

    // Verify URL
    await expect(page).toHaveURL(
        "https://testautomationpractice.blogspot.com/"
    );

    // Verify page title
    await expect(page).toHaveTitle("Automation Testing Practice");

    // Enter Name
    const enterNameInput = page.getByPlaceholder("Enter Name");

    await expect(enterNameInput).toBeVisible();
    await expect(enterNameInput).toBeEnabled();

    await enterNameInput.fill("Ujjwal");

    // Enter Email
    const enterEmailInput = page.getByPlaceholder("Enter Email");

    await expect(enterEmailInput).toBeVisible();
    await expect(enterEmailInput).toBeEnabled();

    await enterEmailInput.fill("Ujjwal@gmail.com");

    // Verify Data Entry Form link
    const dataEntryFormLink = page.getByRole("link", {
        name: "Data Entry Form"
    });

    await expect(dataEntryFormLink).toBeVisible();
});