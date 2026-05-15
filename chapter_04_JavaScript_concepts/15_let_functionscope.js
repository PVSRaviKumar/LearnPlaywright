let a = 10; //global scope variable
console.log(a);

//Defination of the function
function printhello() {
    console.log("Hello! the Testing Academy");
    let a = 20;//local scope variable
    console.log(a);
    if (true) {
        let a = 30;  //local scope variable but it will override the previous value of a because let is block scoped
        console.log(a);
    }
    console.log("f->", a);


}
console.log("g->", a);
// calling a function
printhello();