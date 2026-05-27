import {test,expect,Locator} from '@playwright/test';
//Text input

test('Text Input Actions',async({page})=>{
await page.goto('https://automationexercise.com/login');

const newUserSignUpText=page.locator("xpath=//h2[text()='New User Signup!']");
await expect(newUserSignUpText).toBeVisible();

const userNameInput:Locator=page.locator("input[data-qa='signup-name']");
// verify the input field is enabled
// to wait till userNameInput is enabled
await page.waitForTimeout(5000);

await expect(userNameInput).toBeVisible();
// fill the input field with a username
await userNameInput.fill("testuser123");

const emailInput:Locator=page.locator("//input[@type='email' and @data-qa='signup-email']");
await expect(emailInput).toBeVisible();
// fill the email input field with an email address
await emailInput.fill("testuser1237889@example.com");

// click the Sign Up button
const signUpButton:Locator=page.locator("xpath=//button[text()='Signup']");
await expect(signUpButton).toBeVisible();
await signUpButton.click();



})

test('Radio button actions',async({page})=>{
    await page.goto('https://automationexercise.com/login');

const newUserSignUpText=page.locator("xpath=//h2[text()='New User Signup!']");
await expect(newUserSignUpText).toBeVisible();

const userNameInput:Locator=page.locator("input[data-qa='signup-name']");
// verify the input field is enabled
// to wait till userNameInput is enabled
await page.waitForTimeout(5000);

await expect(userNameInput).toBeVisible();
// fill the input field with a username
await userNameInput.fill("testuser123");

const emailInput:Locator=page.locator("//input[@type='email' and @data-qa='signup-email']");
await expect(emailInput).toBeVisible();
// fill the email input field with an email address
await emailInput.fill("Suraj8989@example.com");

// click the Sign Up button
const signUpButton:Locator=page.locator("xpath=//button[text()='Signup']");
await expect(signUpButton).toBeVisible();
await signUpButton.click();

    const radioButton:Locator=page.locator("xpath=//input[@value='Mrs']");
    await expect(radioButton).toBeVisible();
    await radioButton.click();
    expect(await radioButton.isChecked());


});

test('Checkboxes actions',async({page})=>{
    await page.goto('https://automationexercise.com/login');

const newUserSignUpText=page.locator("xpath=//h2[text()='New User Signup!']");
await expect(newUserSignUpText).toBeVisible();

const userNameInput:Locator=page.locator("input[data-qa='signup-name']");
// verify the input field is enabled
// to wait till userNameInput is enabled
await page.waitForTimeout(5000);

await expect(userNameInput).toBeVisible();
// fill the input field with a username
await userNameInput.fill("testuser123");

const emailInput:Locator=page.locator("//input[@type='email' and @data-qa='signup-email']");
await expect(emailInput).toBeVisible();
// fill the email input field with an email address
await emailInput.fill("SurajKapur8989@example.com");

// click the Sign Up button
const signUpButton:Locator=page.locator("xpath=//button[text()='Signup']");
await expect(signUpButton).toBeVisible();
await signUpButton.click();

    const radioButton:Locator=page.locator("xpath=//input[@value='Mrs']");
    await expect(radioButton).toBeVisible();
    await radioButton.click();
    expect(await radioButton.isChecked());

 // Check the newsletter subscription checkbox
    const newsLetterCheckBox:Locator=page.locator("xpath=//input[@name='newsletter']");
    await expect(newsLetterCheckBox).toBeVisible();
    await newsLetterCheckBox.click();
    expect(await newsLetterCheckBox.isChecked());

    // Check the special offers checkbox
    const specialOffersCheckBox:Locator=page.locator("xpath=//input[@name='optin']");
    await expect(specialOffersCheckBox).toBeVisible();
    await specialOffersCheckBox.click();
    expect(await specialOffersCheckBox.isChecked());



});
