import{test,expect,Locator} from '@playwright/test';

test('DropDown ',async({page})=>{
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
await emailInput.fill("Suraj89896@example.com");

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
await emailInput.fill("SurajKapu898996@example.com");

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

    const passwordInput:Locator=page.locator("xpath=//input[@id='password']");
    // Verify passwordInput button is visible
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill('SamsunSport');
    const monthsDropDown:Locator=page.locator('#months>option');
    // Verify monthsDropDown is visible
    await expect(monthsDropDown).toBeVisible();
    await expect(monthsDropDown).toHaveCount(1);
    await monthsDropDown.selectOption('September');

    const daysDropDown:Locator=page.locator('#days>option');
    // Verify daysDropDown is visible
    await expect(daysDropDown).toBeVisible();
    await expect(daysDropDown).toHaveCount(32);
    await daysDropDown.selectOption({value:'1'});

    const yearsDropDown:Locator=page.locator('#years>option');
    // Verify yearsDropDown is visible.
    await expect(yearsDropDown).toBeVisible();
    await expect(yearsDropDown).toHaveCount(123);
    await yearsDropDown.selectOption({value:'1998'});
})