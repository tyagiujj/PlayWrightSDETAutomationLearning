import { test , expect , chromium } from '@playwright/test';

test.describe("Revision Concepts" , ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
    })
    
    test("Verify the title of the page", async ({page})=>{
       
        await expect(page).toHaveTitle("Automation Testing Practice");
    })
    test("Verify the url of the application" , async ({page})=>{
     
        await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    })
    test("Verify the heading of the page" , async ({page})=>{
       
        const heading = await page.getByRole('heading', { name: 'Automation Testing Practice' });
        await expect(heading).toBeVisible();
    })
    test("Verify the action method" , async({page})=>{
       
      const entername=await page.getByRole('textbox', { name: 'Enter Name' });
      await expect(entername).toBeVisible();
      await entername.fill("Ujjwal Tyagi");

      const maleradiobutton= await page.getByRole('radio', { name: 'Male', exact: true });
      await expect(maleradiobutton).toBeEnabled();
      await maleradiobutton.check();
      await expect(maleradiobutton).toBeChecked();

      const sundaycheckbox =await page.getByRole('checkbox', { name: 'Sunday' });
      await expect(sundaycheckbox).toBeEnabled();
      await sundaycheckbox.click();
      await expect(sundaycheckbox).toBeChecked();
    })

    test("Upload the single file"  , async({page})=>{
        await page.locator('#singleFileInput').setInputFiles('uploadFile/SDET_Interview_Notes_Ujjwal.pdf');
        await page.getByRole('button', { name: 'Upload Single File' }).click();
        await expect(page.locator('#singleFileStatus')).toHaveText("Single file selected: SDET_Interview_Notes_Ujjwal.pdf, Size: 235121 bytes, Type: application/pdf");
    })
    test("Upload the multiple file functionality " , async({page})=>{
        await page.locator("//input[@id='multipleFilesInput']").setInputFiles(['uploadFile/SDET_Interview_Notes_Ujjwal.pdf', 'uploadFile/Playwright_locators.pdf', 'uploadFile/playwright-locators_cheatsheet.pdf']);
        await page.getByRole('button', { name: /Upload Multiple Files/i }).click();
    })

    test("Mouse action" , async({page})=>{
        await page.getByRole('button', { name: 'Copy Text' }).dblclick();
        await page.getByRole('button', { name: 'Point Me' }).hover();
        await page.getByRole('link', { name: 'Mobiles' }).click();
    })
    test("Verfiy the simple alert" ,async({page})=>{
        page.on('dialog', async(dialog)=>{
            await expect(dialog.message()).toBe("I am an alert box!");
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Simple Alert' }).click();
    })
    test("Verify the confirmation alert" , async({page})=>{
        page.on('dialog',async(dialog)=>{
            await expect(dialog.message()).toBe("Press a button!");
            await dialog.dismiss();
        })
        await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    })
    test("Verify the prompt alert" , async({page})=>{
        page.on('dialog', async(dialog)=>{
            await expect(dialog.message()).toBe("Please enter your name:");
            await dialog.accept();
        })
        await page.getByRole('button', { name: 'Prompt Alert' }).click();
    })
    test("Verify the Brower context" , async()=>{
         //created chromium browser 
           const browser= await chromium.launch()
        // create a new browser context
         const context =await browser.newContext();
        // create a new page inside the context
         const contextPage = await context.newPage();
         await contextPage.goto("https://testautomationpractice.blogspot.com/");
         await expect(contextPage).toHaveTitle("Automation Testing Practice");
        // close context and browser
         await context.close();
         await browser.close();
    })

})