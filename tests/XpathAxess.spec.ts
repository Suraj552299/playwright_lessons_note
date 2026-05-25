import {test,expect, Locator} from '@playwright/test';

test('xpath accessibility',async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp");

const germany=page.locator("//td[text()='Germany']/self::td");
await expect(germany).toHaveText('Germany');

const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr");
await expect(parentRow).toContainText('Germany');
await expect(parentRow).toContainText("Maria Anders");


const tableElement:Locator=page.locator("//td[text()='Germany']/ancestor::table");
await expect(tableElement).toBeVisible();
await expect(tableElement).toHaveAttribute('id','customers');

const allTD:Locator=page.locator("//table[@id='customers']//descendant::td");
await expect(allTD).toHaveCount(18);


const firstElement:Locator=page.locator("//td[normalize-space()='Germany']/following::td[1]");
await expect(firstElement).toHaveText('Centro comercial Moctezuma');

const precidingElement:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");

await expect(precidingElement).toHaveText("Maria Anders");

})