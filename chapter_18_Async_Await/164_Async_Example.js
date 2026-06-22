//Basic  Async  and Await

// Async function is a function that returns a promise always.
//  It is used to handle asynchronous operations in a more elegant way.
// It allows us to write asynchronous code in a synchronous manner.
//  The async keyword is used to declare an async function.
// The await keyword is used to wait for a promise to resolve.
//  It can only be used inside an async function.

async function gettestResult() {
    return "Test passed!";
}

gettestResult.then(function (result) {
    console.log(result);
});

// Sample example of playwright code

import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator();

});
// the above line of code needs to be exceute sequentailly because we need to wait for the page
// to load before we can locate any element on the page.

// If the function does not returna promise then no wait key word is needed before the function call.
//  But if the function returns a promise then we need to use await keyword before the function
// call to get the resolved value of the promise. 