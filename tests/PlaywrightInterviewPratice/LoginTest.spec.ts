
import { test, expect } from '@playwright/test';

test('Verify the Login page', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');

  const usernameInput = page.locator('#username');
  await expect(usernameInput).toBeEnabled();
  await usernameInput.fill('rahulshettyacademy');

  const passwordInput = page.locator('#password');
  await expect(passwordInput).toBeEnabled();
  await passwordInput.fill('Learning@830$3mK2');

  const termsCheckbox = page.locator('#terms');
  await expect(termsCheckbox).toBeEnabled();
  await termsCheckbox.check();
  await expect(termsCheckbox).toBeChecked();

  const signInButton = page.locator('#signInBtn');
  await expect(signInButton).toBeVisible();
  await signInButton.click();

  await expect(page).toHaveURL(
    'https://rahulshettyacademy.com/angularpractice/shop'
  );

  const checkoutButton = page.locator('a.nav-link.btn.btn-primary');
  await expect(checkoutButton).toBeVisible();
  await checkoutButton.click();

  const checkout = page.getByRole('button', { name: 'Checkout' });
  await expect(checkout).toBeVisible();
  await checkout.click();

  const textInput = page.getByRole('textbox');
  await expect(textInput).toBeEnabled();
  await textInput.fill('India');

  const termsAndConditions = page.locator("label[for='checkbox2'] a");
  await expect(termsAndConditions).toBeEnabled();
  await termsAndConditions.click();

  await page.getByText('Close', { exact: true }).click();

  await page.locator("//input[@value='Purchase']").click();

  // 8. Verify the success message
  const successMessage = page.locator('div.alert-success');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText(
    'Success! Thank you! Your order will be delivered in next few weeks :-).'
  );
});