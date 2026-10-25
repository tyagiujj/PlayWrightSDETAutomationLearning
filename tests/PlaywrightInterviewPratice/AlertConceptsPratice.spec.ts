import {test ,expect} from '@playwright/test';

test.describe("Alert Concepts Pratice" , ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
    })
    test("Verify the Simple Alert" , async({page})=>{
        page.on('dialog', async(dialog)=>{
            await expect(dialog.message()).toBe("I am an alert box!");
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Simple Alert' }).click();
    })
    test("Verfiy the confirm alert" , async({page})=>{
        page.on('dialog', async(dialog)=>{
            await expect(dialog.message()).toBe("Press a button!");
            await dialog.dismiss();
        })
        await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    })

    test("Verify the Prompt Alert" , async({page})=>{
        page.on('dialog', async(dialog)=>{
            await expect(dialog.message()).toBe("Please enter your name:");
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Prompt Alert' }).click();
    })
})