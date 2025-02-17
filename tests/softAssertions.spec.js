import { test, expect } from '@playwright/test'

test('soft assertions', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')

    //Hard assertions
    await expect(page).toHaveTitle('STORE')
        .then(() => {
            console.log('Title is correct')
        })
    await expect(page).toHaveURL('https://demoblaze.com/index.html')
        .then(() => {
            console.log('URL is correct')
        })
    await expect(page.locator('.navbar-brand')).toBeVisible()
        .then(() => {
            console.log('Logo is visible')
        })


    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})