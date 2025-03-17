import { test, expect } from '@playwright/test'

test('date picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Date picker
    const datePicker = page.locator('#datepicker')
    await datePicker.fill('15/02/2026')

    await page.waitForTimeout(2000)

    const year = '2025'
    const month = 'August'
    const day = '20'

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        if (currentYear === year && currentMonth === month) {
            break
        }
        await page.locator('.ui-datepicker-next').click()
    }

    await page.locator('.ui-state-default').getByText(day).click()

    await page.waitForTimeout(2000)
})