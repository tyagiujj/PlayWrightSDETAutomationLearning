import { test, expect } from '@playwright/test';

test('Single Download File', async ({ page }) => {
    test.setTimeout(60000); 
  await page.goto('https://the-internet.herokuapp.com/download');

  // Start waiting for the download BEFORE clicking
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'SkodeQA_Sharmatania_sharmatania384@gmail.com.pdf' }).click();
  const download = await downloadPromise;

  // Verify the download succeeded (failure() returns null on success)
  expect(await download.failure()).toBeNull();

  // Verify the file name
  expect(download.suggestedFilename()).toBe('SkodeQA_Sharmatania_sharmatania384@gmail.com.pdf');

  // Save the file into a downloads folder
  await download.saveAs('downloads/' + download.suggestedFilename());
});