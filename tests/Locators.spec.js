// const {test, expect} = require('@playwright/test')

import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) =>{
    //get the page via url
    await page.goto('https://localhost:44379/Registration/Index')
    
    //click login link using "Xpath"
    // await page.locator('/html/body/div/form/a').click()
    // await page.getByRole('link', {name: 'Already have an account? Login'}).click()

    //provide user email using "Property"
    // await page.locator('Email').fill('sakira@gmail.com')
    // await page.fill('Email', 'sakira@gmail.com')
    await page.getByPlaceholder('Email').fill('sakira@gmail.com');

    //provide user password using "Property"
    // await page.locator('Password').fill('123456')
    // await page.fill('Password', '123456')
    await page.getByPlaceholder('Password').fill('123456');

    //click on Login button using CSS
    await page.locator('.btn.btn-success').click()

    //verify About link presence
    // const aboutLink = await page.locator('/html/body/nav/div/div/ul/li[2]/a')
    const aboutLink = await page.getByRole('link', {name: 'About'})
    await expect(aboutLink).toBeVisible()

    await page.close();
    

})