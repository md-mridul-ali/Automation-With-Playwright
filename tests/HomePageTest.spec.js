
const { test, expect } = require('@playwright/test')

test('Home Page', async ({ page }) => {
    await page.goto('https://md-mridul-ali.github.io/english-janala/')
    const pageTitle = await page.title(); //get the page title
    console.log('Page Title: ', pageTitle);

    await expect(page).toHaveTitle('English Janala'); //validate the page title
    
    const pageUrl = page.url(); //get the page url
    console.log('Page Url:', pageUrl);
    await expect(page).toHaveURL('https://md-mridul-ali.github.io/english-janala/')

    await page.close()

})