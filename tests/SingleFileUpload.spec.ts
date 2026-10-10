import { test , expect } from '@playwright/test';
test("Verify the Single file upload functionality" , async ({ page }) =>{
     //Navigate to the file upload page 
     await page.goto("https://testautomationpractice.blogspot.com/");

 await page.locator('#singleFileInput').setInputFiles('uploadFile/SDET_Interview_Notes_Ujjwal.pdf');

 await page.getByRole('button', { name: 'Upload Single File' }).click();

 await expect(page.locator('#singleFileStatus')).toHaveText("Single file selected: SDET_Interview_Notes_Ujjwal.pdf, Size: 235121 bytes, Type: application/pdf");
})

