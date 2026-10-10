import { test ,expect } from '@playwright/test';
test("Verify the Multiple file upload functionality" , async ({ page }) =>{
     //Navigate to the file upload page 
     await page.goto("https://testautomationpractice.blogspot.com/");

     await page.locator("//input[@id='multipleFilesInput']").setInputFiles(['uploadFile/SDET_Interview_Notes_Ujjwal.pdf', 'uploadFile/Playwright_locators.pdf', 'uploadFile/playwright-locators_cheatsheet.pdf']);

     await page.getByRole('button', { name: /Upload Multiple Files/i }).click();
})