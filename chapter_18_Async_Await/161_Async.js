async function apicall() {
    try {
        let result = await Promise.reject("503 reject");

    }
    catch (error) {
        console.log("Error", error);
    }
    finally {
        console.log("clean up");
    }
}
apicall();

// if a function is declared as async then it will always return a promise.
//  if we return a value from an async function then it will be wrapped in a
// promise and if we throw an error from an async function then it will be
//  wrapped in a rejected promise.
//if we use await before a promise then it will wait for the promise to resolve and return the resolved value.
// If the promise is rejected then it will throw an error
// which can be caught using try catch block.