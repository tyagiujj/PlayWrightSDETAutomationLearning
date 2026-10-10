import { test , expect } from '@playwright/test';

test.describe('Playwright Practice', () => {
    test.beforeEach(async ({ page }) =>{
        await page.goto("https://testautomationpractice.blogspot.com/");
    })

    test("Verify the Title of the Page" , async ({ page })=>{
        // Verify the title of the page
        const title = await page.title();
        await expect(title).toBe("Automation Testing Practice");
        console.log("Title of the page is : " , title);
    })
    test("Verify the URL of the Page" ,async ({ page })=>{
        // Verify the URL of the page
        const url= await page.url();
        await expect(url).toBe("https://testautomationpractice.blogspot.com/");
        console.log("URL of the page is : " ,url);
    })
    test("Verify the Text by using GetByText" ,async ({ page })=>{
        // Verify the text using getByText
        const textElement = await page.getByText('Automation Testing Practice');
        await expect(textElement).toBeVisible();
        console.log("Text element is visible : " , textElement);
    })
    test("Verify the Input field using getByPlaceholder" , async ({ page })=>{
        // Verify the input field using getByPlaceholder
        const inputField =await page.getByPlaceholder("Enter Name");
        await expect(inputField).toBeEnabled();
        await inputField.fill("Ujjwal");
        console.log("Input field is enabled and filled with value : " , inputField);

    })
    test("Verify the Radio button using getByLabel" , async ({ page })=>{
        // Verify the radio button using getByRole
        const radioButton = await page.getByRole('radio', { name: 'Male', exact: true });
        await radioButton.check();
        await expect(radioButton).toBeChecked();
        console.log("Radio button is enabled and checked : " , radioButton);
    })
    test("Verify the checkbox functionality using single checkbox" ,async ({ page })=>{
        // Verify the checkbox functionality using single checkbox
        const checkbox = await page.getByLabel("Sunday");
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        console.log("Checkbox is enabled and checked : " , checkbox);
    })
    test("Verify the checkbox functionality using multiple checkboxes" , async ({ page })=>{
        // Verify the checkbox functionality using multiple checkboxes
        const checkboxs = await page.locator('input.form-check-input');
        const checkboxCount = await checkboxs.count();
        console.log("Total number of checkboxes : " , checkboxCount);
        for(let i=0; i<checkboxCount; i++){
            const checkbox =await checkboxs.nth(i);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
            console.log("Checkbox is enabled and checked : " , checkbox);

          
        }
    })
})