//fn with in fn this is not used in automation.

let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);// can't access the inner fn var.
}