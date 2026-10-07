import { test, expect } from '@playwright/test';

test.describe('Basic Concepts', () => {

    // Before each test, navigate to the Playwright practice page
    test.beforeEach(async ({ page }) => {

        // Open application URL before every test
        await page.goto(
            'https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    });

    test('Verify the Title of the Page', async ({ page }) => {
        // Verify the title of the page
        expect(await page.title()).toBe('Automation Testing Practice: PlaywrightPractice');
    });

    test('Verify the URL of the Page', async ({ page }) => {
        // Verify the URL of the page
        expect(await page.url()).toBe('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    });

    test('Verify the Main Header of the Page', async ({ page }) => {
        // Verify the main header of the page
        const mainHeader =await page.getByRole('link', { name: 'Automation Testing Practice'});
        await expect(mainHeader).toBeVisible();
        
    });
    test("Verify the Text using getByText" ,async ({ page })=>{
        // Verify the text using getByText
        const textElement = await page.getByText("Locate elements by their text content.");
        await expect(textElement).toBeVisible();
    })
    test("Verify the Input field using getByLabel" ,async ({ page })=>{
        // Verify the input field using getByLabel
        const inputField = await page.getByLabel("Email Address:");
        await expect(inputField).toBeEnabled();
        await inputField.fill("Ujjwal@gmail.com");
    })
    test("Verify the input field using getByPlaceholder" ,async ({ page })=>{
        // Verify the input field using getByPlaceholder
        const inputField = await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)");
        await expect(inputField).toBeEnabled();
        await inputField.fill("123-456-7890");
    })
    test("Verify the image using getByAltText" ,async ({ page })=>{
        // Verify the image using getByAltText
        const imageElement = await page.getByAltText("logo image");
        await expect(imageElement).toBeVisible();
    })

});