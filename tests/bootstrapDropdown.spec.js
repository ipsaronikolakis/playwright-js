import { test, expect } from '@playwright/test'

test('Multi-select dropdown', async ({ page }) => {
    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click()

    const options = page.locator('ul>li label input')
    await expect(options).toHaveCount(11)

    const multiOptions = await page.$$('ul>li label input')
    expect(multiOptions.length).toBe(11)

    // Select multiple options
    const loopOptions = await page.$$('ul>li label')
    for (let option of loopOptions) {
        const value = await option.textContent()
        console.log(`Value is: ${value}`)
        if (value.includes('Angular') || value.includes('Java')) {
            await option.check()
        }
    }

    // Deselect multiple options
    const loopOptions2 = await page.$$('ul>li label')
    for (let option of loopOptions2) {
        const value = await option.textContent()
        console.log(`Value is: ${value}`)
        if (value.includes('Angular') || value.includes('Java')) {
            await option.uncheck()
        }
    }

    await page.waitForTimeout(1000)
})