const { test, expect } = require('@playwright/test')

test('home page', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')

    const pageTitle = page.title()
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
    await page.locator('#nava').click()

    await page.close()
});