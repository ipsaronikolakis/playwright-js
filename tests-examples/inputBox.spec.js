import { test, expect } from '@playwright/test';

test('Input box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Input box - first name
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#name')).toBeEmpty()
    await expect(page.locator('#name')).toBeEditable()
    await expect(page.locator('#name')).toHaveClass('form-control')
    await expect(page.locator('#name')).toBeEnabled()
    await expect(page.locator('#name')).toHaveAttribute('type', 'text')
    await expect(page.locator('#name')).toHaveAttribute('required')

    await page.locator('#name').fill('John')

    await page.waitForTimeout(2000)

    await expect(page.locator('#name')).toHaveValue('John')
})