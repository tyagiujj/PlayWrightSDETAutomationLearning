import { test , expect } from '@playwright/test';

test('Mouse Click Test' , async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
         
    await page.getByRole('button', { name: 'Copy Text' }).dblclick();

    await page.getByRole('button', { name: 'Point Me' }).hover();
    await page.getByRole('link', { name: 'Mobiles' }).click();


})