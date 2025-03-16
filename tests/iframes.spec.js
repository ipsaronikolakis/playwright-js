import { test, expect } from '@playwright/test'

test('iframe', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Total frames
    const totalFrames = page.frames().length
    console.log(`Total frames: ${totalFrames}`)

    // Get frame from name or url
    // const frame1 = page.frame('frame1')
    // const frame1a = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    // await frame1a.fill('[name="mytext1"]', 'Hello World')

    // Get frame from locator
    const frame2 = page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
    await frame2.fill('Hello')

    await page.waitForTimeout(2000)
})