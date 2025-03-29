import { test, expect } from '@playwright/test'

test('Double click', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com')

    // Double click
    const field1 = page.locator('#field1')
    await expect(field1).toBeVisible()
    await expect(field1).not.toBeEmpty()

    const field2 = page.locator('#field2')
    await expect(field2).toBeVisible()
    await expect(field2).toBeEmpty()

    await page.getByText('Copy Text').dblclick()
    await expect(field2).not.toBeEmpty()
    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(2000)
})