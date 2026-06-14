let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);
//the value will be same and the reference will be different
if (c === d) {
    console.log("true");
} else {
    console.log("false");
}