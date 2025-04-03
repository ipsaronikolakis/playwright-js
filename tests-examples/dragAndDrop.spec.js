import { test, expect } from '@playwright/test'

test('Drag and Drop', async ({ page }) => {
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const rome = page.locator('#box6')
    const italy = page.locator('#box106')

    const washington = page.locator('#box3')
    const usa = page.locator('#box103')

    // Approach 1
    await rome.hover()
    await page.mouse.down()
    await italy.hover()
    await page.mouse.up()

    const romeInItaly = page.locator('#box106 #box6')
    expect(await romeInItaly.isVisible()).toBeTruthy()

    await page.reload()

    // Approach 2
    await rome.dragTo(italy)
    await washington.dragTo(usa)

    await page.waitForTimeout(2000)
})