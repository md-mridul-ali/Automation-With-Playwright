const {test, expect} = require('@playwright/test')

test("Assertions", async ({page})=>{

//open application url
    await page.goto('https://demo.nopcommerce.com/register')

    //1. expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2. expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3. expect(locator).toBeVisible()
    const logoName = await page.locator('.header-logo')
    await expect(logoName).toBeVisible();

    //4. expect(locator).toBeEnabled()
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    5.// expect(locator).toBeChecked()

    //Radio Button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //Check Box
    const NewsLetterCheckBox = await page.locator('.form-check-input')
    await expect(NewsLetterCheckBox).toBeChecked()

    //6. expect(locator).toHaveAttribute()
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

    
})