import { test, expect } from '@playwright/test';

test('Input box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    expect(page.locator('#sunday')).not.toBeChecked()
    await page.locator('#sunday').check()
    expect(page.locator('#sunday')).toBeChecked()
    expect(await page.locator('#sunday').isChecked()).toBeTruthy()

    await page.waitForTimeout(2000)

    await page.locator('#sunday').uncheck()
    expect(page.locator('#sunday')).not.toBeChecked()
    expect(await page.locator('#sunday').isChecked()).toBeFalsy()

    const unCheckedBoxes = page.locator('[for="days"]').locator('..').locator('input[type="checkbox"]');
    const count = await unCheckedBoxes.count();
    console.log(`Total checkboxes found: ${count}`);

    for (let i = 0; i < count; i++) {
        const unCheckedBox = unCheckedBoxes.nth(i);
        await unCheckedBox.check();
        await expect(unCheckedBox).toBeChecked();
    }

    const checkedBoxesLocator = page.locator('[for="days"]').locator('..').locator('input[type="checkbox"]')
    const checkedBoxes = await checkedBoxesLocator.all()

    for (const checkedBox of checkedBoxes) {
        await checkedBox.uncheck()
        await expect(checkedBox).not.toBeChecked()
        expect(await checkedBox.isChecked()).toBeFalsy()
    }

})