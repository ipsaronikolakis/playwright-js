import { test, expect } from '@playwright/test'

test('Paying for a course with Stripe and receiving invoice', async ({ page }) => {
    await page.goto('https://qa2basic.dev.talentlms.com/')

    // Login
    const usernameField = page.locator('#username')
    const passwordField = page.locator('#password')
    const loginButton = page.locator('button[type="submit"]')
    const dashboard = page.locator('#dashboard')

    await usernameField.fill('SuperAdminMaster')
    await passwordField.fill('Epignosis1!')
    await loginButton.click()

    await expect(dashboard).toBeVisible()

    // Switch to learner role
    const profileBtn = page.locator('[data-testid="user-details"]')
    const profileBtnUserInfo = page.locator('[data-testid="user-info"]')
    await profileBtn.hover()

    const learnerRole = page.locator('[data-testid="role-switcher"]').getByText('Learner')
    await learnerRole.click()
    expect(profileBtnUserInfo).toHaveText('Learner')

    // Navigate to course catalog
    const courseCatalog = page.locator('[data-testid="catalog-menu-item"]')
    await courseCatalog.click()

    // Search and select a course
    const courseName = 'course-0umny'
    const searchInput = page.locator('[data-testid="sender-search-input"]')
    await searchInput.fill(courseName)

    const catalogCourseCardsSelector = '[data-testid="catalog-course-card"]'
    const catalogCourseCards = page.locator(catalogCourseCardsSelector)
    await page.waitForSelector(catalogCourseCardsSelector)
    expect(catalogCourseCards).toBeVisible()
    expect(await catalogCourseCards.count()).toBe(1)

    await catalogCourseCards.getByText(courseName).click()

    // Pay for the course
    const startCourseBtn = page.locator('.start-button')
    expect(startCourseBtn).toBeVisible()
    expect(startCourseBtn).toContainText('$')
    await startCourseBtn.click()

    const paymentByCreditCard = page.getByText('Credit card')
    expect(paymentByCreditCard).toBeVisible()
    await paymentByCreditCard.click()

    const checkoutBtn = page.getByRole('button', { name: 'Checkout' })
    expect(checkoutBtn).toBeVisible()
    await checkoutBtn.click()

    await expect(page).toHaveURL(/stripe/)

    await page.waitForTimeout(5000)
})