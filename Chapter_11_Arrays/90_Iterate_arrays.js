//Go from one to another
let tests = ["Login", "Checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("-----");

//for--of(cleanest of the values)
for (test of tests) {
    console.log(test);
}

console.log("-----");
//for each
tests.forEach((test, index) => {
    console.log(test, index);
});

console.log("-----");
let students = ["methis", "Ramu", "pramod", "Madhu"];

for (let student in students) {
    console.log(student, "->", students[student]);// index=in
}

// for (student in students) {
//     console.log(student, "->", students[student]);// index=in
// }

console.log("-----");
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}