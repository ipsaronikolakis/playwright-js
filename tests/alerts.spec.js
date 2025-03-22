import { test, expect } from '@playwright/test'

test('Alertss', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(1000)
})

test('Confirm', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable confirm window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()
    })

    await page.click('#confirmBtn') // click on confirm button
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(1000)
})

test('Prompt', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable prompt window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name')
        expect(dialog.defaultValue()).toBe('Harry Potter')
        await dialog.accept('John Doe')
    })

    await page.click('#promptBtn') // click on prompt button
    await expect(page.locator('#demo')).toHaveText('Hello John Doe! How are you today?')
    await page.waitForTimeout(1000)
})