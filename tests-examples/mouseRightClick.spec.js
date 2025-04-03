import { test, expect } from '@playwright/test'

test('Mouse right click', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    // Mouse right click
    await page.locator('.context-menu-one').getByText('right click me').click({
        button: 'right'
    })

    await page.locator('.context-menu-icon-quit').click()

    await page.waitForTimeout(2000)
})