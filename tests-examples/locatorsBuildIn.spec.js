import { test, expect } from '@playwright/test'

test('Build-in Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { type: 'submit' }).click()

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

    const userName = await page.locator('.oxd-userdropdown').textContent()
    console.log(userName)
    await expect(page.getByText(userName)).toBeVisible()
})