import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro

test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('You did it!')
})

test('visits the dfault learning view 1 route', async ({ page }) => {
  await page.goto('/learning/1')
  await expect(page.locator('h1')).toHaveText('Hello World!')
})
