import { test, expect } from '@playwright/test'

test('Mouse hover', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Mouse hover
    await page.locator('.dropbtn').hover()
    await page.locator('.dropdown-content').getByText('Laptops').click()

    await page.waitForTimeout(2000)

    await page.goto('https://demo.nopcommerce.com/')

    // Mouse hover
    await page.locator('.header-menu li').getByRole('link', { name: 'Computers' }).hover()
    await page.locator('.sublist li').getByRole('link', { name: 'Software' }).click()

    await page.waitForTimeout(2000)
})