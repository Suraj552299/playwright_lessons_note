import{test,expect,Locator} from '@playwright/test';
test('Multi Select Dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
   // await page.locator('#colors').selectOption(['Red','Blue','Green']);
    // using visible text
    
    await page.locator('#colors').selectOption(['red','blue','green']);
await page.waitForTimeout(5000);

const colorsDropDown:Locator=page.locator("#colors>option");
await expect(colorsDropDown).toHaveCount(7);

const colorsText: string[] = (await colorsDropDown.allTextContents()).map(text => text.trim());
for(const text of colorsText){
    console.log(text);
}
await expect(colorsText).toContain('Green');

});