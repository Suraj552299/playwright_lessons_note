import{test,expect, Locator} from '@playwright/test';

/*
2 types of css locators we can use in playwright.
1.basolute css locator
2.relative css locator
tag with id tag#id
tag with class tag.class
tag with any other attribute tag[attribute=value]
tag with class and attribute tag.class[attibute=value]

*/
test('css Locators',async({page})=>{
    // tag#id
await page.goto('https://www.w3schools.com/html/html_tables.asp');

const tutorialsDropDown:Locator=  page.locator("a#navbtn_tutorials");
// Verify the tutorials drop down is visible
await expect(tutorialsDropDown).toBeVisible();

// tag[attribute=value]
const searchBox:Locator=page.locator("input[id='tnb-google-search-input']");
await expect(searchBox).toBeVisible();

// Sometimes we have to use like pattern to locate the element.
// tag[attribute^=value]- starts with
// tag[attribute$=value]- ends with
// tag[attribute*=value]- contains




});