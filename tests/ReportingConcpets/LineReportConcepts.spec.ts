import { test ,expect} from '@playwright/test';

test("Line Report Concepts verify the title" , async ( { page }) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveTitle("Automation Testing Practice");
})