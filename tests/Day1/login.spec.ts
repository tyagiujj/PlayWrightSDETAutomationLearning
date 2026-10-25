 import { test, expect } from '@playwright/test';
 
 test.describe('Login', () => {
4 
test.beforeEach(async ({ page }) => {
 
await page.goto('https://www.saucedemo.com');
});
test('valid user can log in', async ({ page }) => {
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/inventory/);
await expect(page.getByText('Products')).toBeVisible();
});
test('locked out user sees an error', async ({ page }) => {
await page.getByPlaceholder('Username').fill('locked_out_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page.locator('[data-test="error"]'))
.toContainText('Sorry, this user has been locked out');
});
}); 