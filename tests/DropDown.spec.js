const { test, expect } = require('@playwright/test');
const { stat } = require('node:fs');

test('DropDown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/')

    //select by label
    // await page.locator('#country').selectOption({label:'India'});
    //select by visible text
    // await page.locator('#country').selectOption('India');
    //select by value
    // await page.locator('#country').selectOption({value:'uk'})
    //select by index
    // await page.locator('#country').selectOption({index: 1})
    //select by text and without using locator method
    // await page.selectOption('#country', 'India')


    //Assertions

    //1. Check number of options in DropDown
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    //2. check the number of options in DropDown
    // const options = await page.$$('#country option')
    // console.log("Number of Options:", options.length);
    // await expect(options.length).toBe(10);

    //3. check presence of value in DropDown
    // const contents = await page.locator('#country').textContent()
    // await expect(contents.includes('India')).toBeTruthy();

    //4. check presence of value using loop statement
    // const options = await page.$$('#country option')
    // let status = false;
    // for(const option of options)
    // {
    //     // console.log(await option .textContent());
    //     let value = await option .textContent()
    //     if(value.includes('France'))
    //     {
    //         status = true;
    //         break;
    //     }
    // }
    // await expect(status).toBeTruthy();

    //5. select option from the DropDown using loop statement 
    const options = await page.$$('#country option')
    for (const option of options) {
        const text = await option.textContent();
        const val = await option.getAttribute('value');

        if (text.includes('France')) {
            await page.selectOption('#country', val);
            break;
        }
    }

    await page.waitForTimeout(2000);
})