import{test,expect} from '@playwright/test';

test('Google Test',async({page})=>{

await page.goto("https://www.google.com/");
let title:string=await page.title();

console.log("Title of the page is : "+title);
expect(title).toBe("Google");
});

test('Verify the url of the page',async({page})=>{
    await page.goto("https://www.google.com/");
    let url:string=await page.url();
    console.log("URL of the page is :"+url);
    expect(url).toBe("https://www.google.com/");
})

