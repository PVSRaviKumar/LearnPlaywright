let scores = [45, 82, 91, 60, 73];
//map- transform every element , return a new array
// based on the condition every elemnt of the array
// is considered and checked with conditon

// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

//filter --keeps elements that pass a test
let passing = scores.filter(s => s > 70);
console.log(passing);

//reduce ,accumulates to a single value.
let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

//flat -flattens nested  aarays
let nested = [[2, 3], [45, 67, 8], [7, 81], [9]];
console.log(nested.flat());