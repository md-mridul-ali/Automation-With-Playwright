const {test, expect} = require('@playwright/test')

test('Mouse Over', async({page})=>{

    await page.goto('http://localhost/web-tech-24-25/E-Commerce-Managment-System-Web-/Customer/View/')

    const watch = await page.locator('#watch-div')
    await watch.hover();


    await page.waitForTimeout(3000);

})