var a = 10; //global scope variable
console.log(a);

//Defination of the function
function printhello() {
    console.log("Hello! the Testing Academy");
    var a = 20;//local scope variable
    console.log(a);
    if (true) {
        var a = 30;  //local scope variable but it will override the previous value of a because var is function scoped
        console.log(a);
    }
    console.log("f->", a);


}
console.log("g->", a);
// calling a function
printhello();