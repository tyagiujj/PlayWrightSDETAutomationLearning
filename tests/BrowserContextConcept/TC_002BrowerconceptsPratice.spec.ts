import { test, expect, chromium } from "@playwright/test";

test("Browser context demo", async () => {

    //create chromium browser
    const browser = await chromium.launch();

    //create context1 and context2
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    //create pages
    const context1_page = await context1.newPage();
    const context2_page = await context2.newPage();

    await context1_page.goto("https://myschoolone.com/App.php");
    await expect(context1_page).toHaveTitle("MySchoolOne");

    await context1_page.locator('#user_names').fill("KA2023001");
    await context1_page.locator('#password').fill("StudentKA@2023");
    await context1_page.getByRole('checkbox', { name: /I'm not a robot/i }).click();
    await context1_page.locator('a:has-text("Sign In")').click();

    await context2_page.goto("https://testautomationpractice.blogspot.com/");
    await expect(context2_page).toHaveTitle("Automation Testing Practice");

    await expect(context2_page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();


    //cleanup
    await context1.close();
    await context2.close();
    await browser.close();
});