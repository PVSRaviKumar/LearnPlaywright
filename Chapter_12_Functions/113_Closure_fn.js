function outer() {
    let message = "Hello";
    console.log("outer called");
    function inner() {
        console.log(message);
    }
    return inner;
}
let fn_inner = outer();//this function returns inner
fn_inner();// outer called  Hello

//inner();//ReferenceError: inner is not defined
//if we want inner fn to be called  with in outer
// retun inner outside inner but wih in outer fn