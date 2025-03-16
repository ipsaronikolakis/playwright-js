import { test, expect } from '@playwright/test'

test('inner iframe', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    await frame3.locator('input[name="mytext3"]').fill('Hello from frame 3')

    // nested iframe
    const childFrames = frame3.childFrames()
    await childFrames[0].locator('[id="i6"]').check()

    await page.waitForTimeout(2000)
})