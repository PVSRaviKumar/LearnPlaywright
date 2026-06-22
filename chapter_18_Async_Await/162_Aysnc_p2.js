//we have function which will return a promise of type resolve
function gettoken() {
    return Promise.resolve("abce1234");
}

//when ever any function return a promise 
//then we shlould use  await to get the resolved value of the promise
////the callling function should be declared as async to use await keyword

async function run() {
    let token = await gettoken();
    console.log(token);
}
run();//calling the async function run which will return a promise and 
//we can use then to get the resolved value of the promise

// In playwight
// when ever any function  returns a promise then we need to use awati keyword
// Playwright

// page.goto() - Promise () this returns a promise which will be resolved when the page is loaded and it will return the response of the page
// await page.goto();

//whenever any function uses promises then we need use aysn keyword before the function declaration
//  and we need to use await keyword before the function call to get the resolved value of the promise.