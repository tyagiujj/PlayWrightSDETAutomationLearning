import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('heading', { name: 'Automation Testing Practice' }).click();
  await page.locator('.titlewrapper').click();
  await expect(page.locator('h1')).toContainText('Automation Testing Practice');
});