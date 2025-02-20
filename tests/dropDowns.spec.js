import { test, expect } from '@playwright/test'

test('Dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to select an option from the dropdown
    await page.locator('#country').selectOption('United Kingdom')
    await page.locator('#country').selectOption({ label: 'United States' })
    await page.locator('#country').selectOption({ value: 'japan' })
    await page.locator('#country').selectOption({ index: 2 })
    await page.selectOption('#country', 'France')

    // Assertions
    await expect(page.locator('#country option')).toHaveCount(10)
    const countriesOptions = await page.$$('#country option')
    console.log(countriesOptions.length)
    expect(countriesOptions.length).toBe(10)

    // Check if dropdown is enabled
    const isEnabled = await page.locator('#country').isEnabled()
    console.log(isEnabled)
    expect(isEnabled).toBeTruthy()

    // Check if dropdown is disabled
    const isDisabled = await page.locator('#country').isDisabled()
    console.log(isDisabled)
    expect(isDisabled).toBeFalsy()

    // Check if dropdown is visible
    const isVisible = await page.locator('#country').isVisible()
    console.log(isVisible)
    expect(isVisible).toBeTruthy()

    // Check if dropdown is hidden
    const isHidden = await page.locator('#country').isHidden()
    console.log(isHidden)
    expect(isHidden).toBeFalsy()

    // Check the presence of a value in the dropdown
    const isSelected = await page.locator('#country').textContent()
    expect(isSelected).toContain('United Kingdom')
    expect(isSelected.includes('United States')).toBeTruthy()

    // Check the presence of a value in the dropdown using looping
    const options = await page.$$('#country option')
    for (const option of options) {
        let value = await option.textContent();
        value = value.trim();
        if (value.includes('United Kingdom')) {
            console.log(value)
            await page.selectOption('#country', value);
            break;
        }
    }

    await page.waitForTimeout(2000)
})