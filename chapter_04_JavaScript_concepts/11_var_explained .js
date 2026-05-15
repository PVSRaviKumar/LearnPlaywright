var v = 10;
console.log(v);//global scope

//var is function scoped
// function keyword is used for defing of the function
//function declaration

function printhello() {
    console.log("hello from Testing academy");
    var v = 20;//local scope
    console.log(v);
    // local scope has always has highest priority than global scope 
    //it is will be given preference over global scope
    if (true) {
        {
            var v = 30;//local scope
            console.log(v);
        }
    }
}
//calling of a function
printhello();
// var value can be changed n number of times