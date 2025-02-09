import { test, expect } from '@playwright/test'

test('Locators 1', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')

    await page.locator('[data-target="#logInModal"]').click()
    await page.locator('#login2').isVisible()

    await page.locator('#loginusername').fill('username')
    await page.fill('#loginpassword', 'password')

    await page.click('[onclick="logIn()"]')

    await page.locator('#nameofuser').isVisible()

    const element = page.locator('#nameofuser')
    await expect(element).toContainText('username')

    page.waitForSelector('.hrefch')

    const links = await page.$$('.hrefch')
    console.log(links.length)

    for (const link of links) {
        console.log(await link.textContent())
    }

    await page.close()
})