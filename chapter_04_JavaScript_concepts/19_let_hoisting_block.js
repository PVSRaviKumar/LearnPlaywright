//let is block scoped

let x = "global";
if (true) {
// TDZ for block scope- x start here
//console.log(x);//ReferenceError: (NOT Global!)
    let x = "block";//TDZ ends here
    console.log(x);//block scope
}
//TDZ happens only for let and const
// var it is undefined
//let and const it will be refeerence error
