import { test, expect } from '@playwright/test'

test('Multi-select dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multi-select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Green'])

    // Assertions
    const options = page.locator('#colors option')
    await expect(options).toHaveCount(7)

    const multiOptions = await page.$$('#colors option')
    console.log(`Total options: ${multiOptions.length}`)
    expect(multiOptions.length).toBe(7)

    // Check the presence of a value in the dropdown
    const content = await page.locator('#colors').textContent()
    console.log(content)
    expect(content).toContain('Blue')
    expect(content).toContain('Red')
    expect(content).toContain('Green')
    expect(content.includes('Yellow')).toBeTruthy()
    expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(2000)
})