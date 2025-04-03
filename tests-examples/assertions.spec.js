import { test, expect } from '@playwright/test';

test('assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')
    const url = page.url()
    expect(url).toContain('demo.nopcommerce.com/')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')
        .then(() => {
            console.log('Title is correct')
        })

    await expect(page.locator('.header-logo')).toBeVisible()
        .then(() => {
            console.log('Logo is visible')
        })

    const searchStoreBox = page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()
        .then(() => {
            console.log('Search box is enabled')
        })

    await page.locator('#gender-male').click()
    await expect(page.locator('#gender-male')).toBeChecked()
        .then(() => {
            console.log('Male radio button is checked')
        })

    await expect(page.locator('#Newsletter')).toBeChecked()
        .then(() => {
            console.log('Newsletter is checked')
        })

    await expect(page.locator('#register-button')).toHaveAttribute('type', 'submit')
        .then(() => {
            console.log('Register button has type submit')
        })

    const pageTitle = page.locator('.page-title h1')
    await expect(pageTitle).toHaveText('Register')
        .then(() => {
            console.log('Register has text is correct')
        })
    await expect(pageTitle).toContainText('Reg')
        .then(() => {
            console.log('Register contains text is correct')
        })

    const emailField = page.locator('#Email')
    await emailField.fill('B2CZG@example.com')
    await expect(emailField).toHaveValue('B2CZG@example.com')
        .then(() => {
            console.log('Email field has correct value')
        })

    const topBarList = parseInt(await page.locator('.top-menu li').count())
    expect(topBarList).toBeGreaterThan(31)
    expect(topBarList).toBeLessThan(33)
    expect(topBarList).not.toBe(34)
})