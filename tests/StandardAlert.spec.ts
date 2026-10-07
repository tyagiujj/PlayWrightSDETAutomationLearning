
import { test, expect } from '@playwright/test';

// ==================== STANDARD ALERT ====================

test('StandardAlert', async ({ page }) => {

    // Open the Playwright practice page
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // Listen for the JavaScript dialog
    page.on('dialog', async (dialog) => {

        // Verify the alert message
        expect(dialog.message()).toBe('I am an alert box!');

        // Accept the alert by clicking OK
        await dialog.accept();
    });

    // Click the button that triggers the Simple Alert
    await page.getByRole('button', { name: 'Simple Alert' }).click();
});


// ==================== CONFIRMATION ALERT ====================

test('ConfirmationAlert', async ({ page }) => {

    // Open the Playwright practice page
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // Listen for the JavaScript dialog
    page.on('dialog', async (dialog) => {

        // Verify the confirmation dialog message
        expect(dialog.message()).toBe('Press a button!');

        // Dismiss the confirmation alert by clicking Cancel
        await dialog.dismiss();
    });

    // Click the button that triggers the Confirmation Alert
    await page.getByRole('button', {
        name: 'Confirmation Alert'
    }).click();
});


// ==================== PROMPT ALERT ====================

test('PromptAlert', async ({ page }) => {

    // Open the Playwright practice page
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
    );

    // Listen for the JavaScript dialog
    page.on('dialog', async (dialog) => {

        // Verify that the dialog is a Prompt
        expect(dialog.type()).toBe('prompt');

        // Verify the prompt message
        expect(dialog.message()).toBe('Please enter your name:');

        // Enter a value in the prompt and click OK
        await dialog.accept('Ujjwal');
    });

    // Click the button that triggers the Prompt Alert
    await page.getByRole('button', { name: 'Prompt Alert' }).click();
});

