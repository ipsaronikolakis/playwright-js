import { test, expect } from '@playwright/test';

test('Input box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Radio buttons
    await expect(page.locator('#male')).toBeVisible()
    await expect(page.locator('#male')).not.toBeChecked()
    await expect(page.locator('#male')).toHaveAttribute('type', 'radio')
    await expect(page.locator('#male')).toHaveValue('male')

    await page.locator('#male').check()

    await page.waitForTimeout(2000)

    await expect(page.locator('#male')).toBeChecked()
    expect(await page.locator('#male').isChecked()).toBeTruthy()

    await page.locator('#female').click()
    await expect(page.locator('#male')).not.toBeChecked()
    expect(await page.locator('#male').isChecked()).toBeFalsy()

    await expect(page.locator('#female')).toBeChecked()
    expect(await page.locator('#female').isChecked()).toBeTruthy()
})