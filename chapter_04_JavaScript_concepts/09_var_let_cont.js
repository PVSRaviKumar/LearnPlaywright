var v = 35;
let X = 45;
const pi = 3.14;

var browser = "chrome";
var browser = "firefox";// redeclaration  is allowed
browser = "edge"// reassigning is allowed

//for functions
var testcases = ["login", "logout", "signup"];
for (var i = 0; i < testcases.length; i++) {
    console.log("running testcase", testcases[i]);
}
console.log("Loop counter leakoutsideof for loop is", i);
// i is accessible outside the loop
//Loop counter leakoutsideof for loop is 3

function say() {
    console.log("Hi from function");
}

//calling function
say();
say();


