
import { test, expect } from '@playwright/test';

test('Verify the Dropdown Practice', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const dropdown = page.getByRole('combobox', { name: 'Country:' });

  // Select by visible text
  // await dropdown.selectOption('India');

  // Select by visible label
//  await dropdown.selectOption({ label: 'India' });

  // Verify the selected option
  //await expect(dropdown).toHaveValue('india');

  //Select by value 
  await dropdown.selectOption({ value: 'germany'});

  // Verify the selected option
  await expect(dropdown).toHaveValue('germany');
});
