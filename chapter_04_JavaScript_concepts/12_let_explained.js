//let is blocked scoped, which means it is only accessible within the block it is defined in.
let v = 89;
//let v = 90;  redeclaration is not allowed Identifier 'v' has already been declared

let retrycount = 0;
retrycount = retrycount + 1;//reassigning is allowed
retrycount = retrycount + 1
console.log("retrycount", retrycount);

//let retrycount = 5; //Identifier 'retrycount' has already been declared

// let is block scoped
let teststatus = "pending";
if (teststatus === "pending") {
    let executiontime = 1000;
    console.log("Inside if block", executiontime);
}
console.log("outside if block", executiontime); //ReferenceError: executiontime is not defined

/* examples of block scope
{}// block scope
if(){}// block scope
for(){}// block scope
function test(){} // block scope*/

//let = royal
//var= varir    able or triator