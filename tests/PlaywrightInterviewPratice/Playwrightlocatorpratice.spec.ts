import { test , expect } from '@playwright/test';

test("Verify the Playwright locator practice" , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const heading= page.getByRole('heading', { name: 'Automation Testing Practice' });
    await expect(heading).toBeVisible();


    const name = page.getByPlaceholder("Enter Name");
    await expect(name).toBeEnabled();
    await name.fill("Ujjwal Tyagi");

    const text = page.getByText('For Selenium, Cypress & Playwright', { exact: true });
    await expect(text).toBeVisible();

    const email = page.getByPlaceholder("Enter EMail");
    await email.fill("ujjwaltyagi@gmail.com");
})