// A promise is a call back with certain condition
// if the callback is successful we will call resolve
//if it is unsuccessful  then we will call reject

// if we are able to resolve "then" will be called
// if we are not able to resolve "we will use  catch" for error handling.

let order = new Promise(function (resolve, reject) {
    let foodready = true
    if (foodready) {
        resolve("Pizza is delivered. Food is ready");
    } else {
        reject("Order cancelled because of rain");
    }
});

console.log(order);