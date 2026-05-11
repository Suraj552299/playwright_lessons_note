import{test,expect,Locator} from '@playwright/test';

/*
Locators are used to find elements on a web page.
*/
test('Verify Playwright Locators',async({page})=>{
await page.goto("https://automationexercise.com/");

//1. page.getByAltText() to locate an element, usually image, by its text alternative.
const logo:Locator = page.getByAltText("Website for automation practice");

await expect(logo).toBeVisible();

//2. page.getByText() to locate by text content.
 const homeLink:Locator= page.getByText(" Home");
 await expect(homeLink).toBeVisible();

 //3.page.getByRole() to locate by explicit and implicit accessibility attributes.
 const productsLink:Locator=page.getByRole('link',{name:" Products"});
 await expect(productsLink).toBeVisible();
 await productsLink.click();
 await expect(page.getByRole('heading',{name:"Category"})).toBeVisible();


 //4.page.getByLabel() to locate a form control by associated label's text.

 //5.page.getByPlaceholder() to locate an input by placeholder.
 await expect(page.getByPlaceholder("search_product")).toBeVisible();

})