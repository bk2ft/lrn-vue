import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro

test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('You did it!')
})

test('visits the default learning view 1 route', async ({ page }) => {
  await page.goto('/learning/1')
  await expect(page.locator('h1')).toHaveText('Hello World!')
})

test('visits the complex pinia page and changes globals', async ({ page }) => {
  await page.goto('/learning/p3')
  await page.getByRole('button', { name: 'Change Globals' }).click()
  await expect(page.locator('.main-content', { hasText: "Matt's App" })).toBeVisible()
})
