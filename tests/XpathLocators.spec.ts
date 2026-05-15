/*
Xpath stands for XML path language.
İt is syntax to navigate through elements and attributes in an XML document.
In web automation ,xpath is used to locate elements on a webpage by their structure and attributes.

Types of xpath
1.Absolute xpath:
An absolute xpath provides the full path from the root of the documents to the target element.
It starts with a single slash (/)
2.Relative xpath(partial xpath):
A relative xpath is more flexible way of finding an element.It directly jumps to the element using attributes,without starting from the root.
It starts with a double slash(//)

*/
import {test,expect, Locator} from '@playwright/test';

test('Locate elements using Xpath',async({page})=>{

    await page.goto("https://automationexercise.com/");
    // Locate elememts using absolute xpath
    const absoluteXpathElement:Locator=await page.locator("xpath=/html/body/header/div/div/div/div[2]/div/ul/li[1]/a");

    // Locate elements using relative xpath
    const relativeXpathElement:Locator=await page.locator("xpath=//a[text()='Home']");

    // Assert that both locators point to the same element
    await expect(absoluteXpathElement).toBeVisible();
    await expect(relativeXpathElement).toBeVisible();

    // Xpath with contains() function
    // Matches elements that contain a specific substring within an attribute.
    // xpath format //*[contains(@attribute,atrributeValue]
    const containsXpathElement:Locator=await page.locator('//*[contains(text()," Home")]');
    await expect(containsXpathElement).toBeVisible();
    // Xpath with starts-with() function
    // Matches elements whose attribute vaules start with a specified string.
    // xpath format //*[starts-with(@id,'user')]
// Note: The starts-with() function is helpful for dynamic elements whose IDs or class are partially consistent.

// xpath with text() function.
// Selects elements based on the exact content of the element.
// xpath format //*[text()='']

const cartLink:Locator=await page.locator("xpath=//a[text()=' Cart']");
await expect(cartLink).toBeVisible();
});