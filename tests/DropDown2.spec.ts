import{test,expect,Locator} from '@playwright/test';

test('Single select DropDown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // There are four ways to select an option from a dropdown .
    //await page.locator('#country').selectOption('India'); // visible text
    
   // await page.locator('#country').selectOption({value:'india'}); // value of the attribute 

   // await page.locator('#country').selectOption({label:'India'}); // label of the option

   //await page.locator('#country').selectOption({index:3}); // index of the option

   const countryOptions:Locator=page.locator('#country>option');
   await expect(countryOptions).toHaveCount(10);

   const countries:string[]=(await countryOptions.allTextContents()).map(text=>text.trim());
   console.log(countries);
    expect(countries).toContain('Japan');

    for(const countriesText of countries){
        console.log(countriesText);
    }
   




})