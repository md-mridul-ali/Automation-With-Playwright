const { test, expect } = require('@playwright/test')

test('Check Box', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Single Check Box

    await page.locator("//input[@type='checkbox' and @id='sunday']").check()
    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@type='checkbox' and @id='monday']").isChecked()).toBeFalsy()

    //Multiple Check Box

    const checkboxLocators = [
        "//input[@type='checkbox' and @id='sunday']",
        "//input[@type='checkbox' and @id='monday']",
        "//input[@type='checkbox' and @id='saturday']"
    ]
//Select multiple Check box
    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check()
    }

    await page.waitForTimeout(5000)

    //Unselect multiple Check box
    for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000)
})