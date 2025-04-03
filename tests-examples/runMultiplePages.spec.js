const { test, expect } = require('@playwright/test');

test('Handle multiple pages and close one', async ({ context }) => {
    const page1 = await context.newPage();
    await page1.goto('https://example.com');

    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev');

    // Close page1 when no longer needed
    await page1.close();

    // Continue working with page2
    const title = await page2.title();
    console.log('Page2 title:', title);
});
