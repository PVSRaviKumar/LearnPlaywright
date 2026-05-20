// Max of two numbers using ternary operator
let num1 = 10;
let num2 = 20;
let max = (num1 > num2) ? num1 : num2;
console.log("The maximum number is:", max);

// Max of three numbers using ternary operator
let a = 5;
let b = 10;
let c = 15;
let maxOfThree = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log("The maximum number among a, b, and c is:", maxOfThree);


let a1 = 5;
console.log(a1++ + ++a1 - --a1 + a1-- + ++a1);//18
console.log(a1);//6

