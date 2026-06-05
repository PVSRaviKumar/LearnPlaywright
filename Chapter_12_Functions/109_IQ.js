// // Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// getStatus(200);
// getStatus(404);
// getStatus(500);

// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }
// let result = logTest("Login");
// console.log(result);

// greet("Alice");  // this  will work no reference erro this is normal function calling it these are fully hoisted

// function greet(name) {
//     return `Hello, ${name}!`;
// }

sayHi("Bob");  // this will give reference error as this functions as expression  

const sayHi = function (name) {
    return `Hi, ${name}!`;
};