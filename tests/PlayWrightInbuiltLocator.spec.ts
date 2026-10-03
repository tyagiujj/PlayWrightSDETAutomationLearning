
import { test, expect } from "@playwright/test";

test("Verify Playwright Locator Practice Lab", async ({ page }) => {

    // Navigate to the application
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app");

    // Verify page title
    await expect(page).toHaveTitle("Playwright Locator Practice Lab");

    // Locate Dashboard link
    const dashboardHeader = page.getByRole("link", {
        name: "Dashboard"
    });
    await expect(dashboardHeader).toBeVisible();

    // Verify welcome message
    const welcomeText = page.getByText("Welcome to the Dashboard");
    await expect(welcomeText).toBeVisible();

    // Locate First Name input and enter text
    const firstNameInput = page.getByLabel("First Name");
    await expect(firstNameInput).toBeEnabled();
    await firstNameInput.fill("Ujjwal");

    // Verify Playwright logo
    const imageDisplay = page.getByAltText("Playwright logo");
    await expect(imageDisplay).toBeVisible();

    // Enter your username 
    const usernameInput = page.getByPlaceholder("Enter your username");
    await expect(usernameInput).toBeEnabled();
    await usernameInput.fill("Tyagi");


});