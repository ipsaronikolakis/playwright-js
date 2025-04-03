import { test, expect } from '@playwright/test'

test('handling table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = page.locator('#productTable')
    await table.isVisible()

    // total number of rows and columns
    const columns = table.locator('thead tr th')
    console.log('Number of columns: ', await columns.count()) //4
    expect(await columns.count()).toBe(4)

    const rows = table.locator('tbody tr')
    console.log('Number of rows: ', await rows.count()) //5
    expect(await rows.count()).toBe(5)

    // select a checkbox of a product
    const smartphoneRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartphone'
    })
    await smartphoneRow.locator('input[type="checkbox"]').check()
    expect(await smartphoneRow.locator('input[type="checkbox"]').isChecked()).toBeTruthy()

    // select multiple products be re-usable function
    await selectProduct(rows, page, 'Laptop')
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'SmartWatch')

    // print all product details
    for (let i = 0; i < await rows.count(); i++) {
        for (let j = 0; j < await columns.count() - 1; j++) {
            console.log(await rows.nth(i).locator('td').nth(j).textContent())
        }
    }

    // print all product details for all pages
    const pagination = page.locator('#pagination')
    const totalPage = await pagination.locator('li').count()

    for (let i = 0; i < totalPage; i++) {
        const currentPage = pagination.locator('li').nth(i)
        await currentPage.click()
        for (let j = 0; j < await rows.count(); j++) {
            for (let k = 0; k < await columns.count() - 1; k++) {
                console.log(await rows.nth(j).locator('td').nth(k).textContent())
            }
        }
    }

    await page.waitForTimeout(1000)
})

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input[type="checkbox"]').check()
    expect(await matchedRow.locator('input[type="checkbox"]').isChecked()).toBeTruthy()
}