const { test, expect } = require('@playwright/test')

test('Radio Button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Male Radio Button
    await page.locator('#male').check()
    await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy()

    //Female Radio Button
    await expect(await page.locator('#female').isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)

})