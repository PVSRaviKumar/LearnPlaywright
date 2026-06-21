// Normal Function
function print() {
    console.log("Normal Function ");
}
// call back function
function placeorder(Item, callback) {
    console.log("Hi Your order is placed ");
    callback();// this has to be at last stament. and there should be only one function
}
// calling of a call back function

/* //first way  here function is anonymous function
placeorder("Burger", function () {
    console.log("Hi How are you using anonymous function ");
}) */

//Second way of calling a call back function
placeorder("Pizza", print);

//Third Way using arrow function =>
placeorder("Momos", () => {
    console.log("Hi How are you using Arrow function");
})
// playwright uses the arrow function
