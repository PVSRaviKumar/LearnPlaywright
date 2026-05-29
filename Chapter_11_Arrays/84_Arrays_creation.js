//Creation of arrays // Array literal[preferred]
let browsers = ["chrome", "firefox", "edge", "opera"];

//Array Constructors
//empty array creation
let scores = new Array(3);//here 3 is size of array or length of array
console.log(scores);//[ <3 empty items> ]
//to assign values into the empty array
scores[0] = 10;
scores[1] = 24;
scores[2] = 30;
console.log(scores);
scores[3] = 40;
scores[4] = 50;
console.log(scores);
//JS arrays array size are dynamic in nature
//In Java arrays size if fixed.

let scores2 = new Array(1, 2, 3, 4, 5);
console.log(scores2);

// Arrays are always stored in continous memory locations irrespective of any programming language

let numbers = new Array(100, 200, 300, 400);//size =4, index =0-3
console.log(numbers);

//using array.of method
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);


//using Array.from method

let chars = Array.from("helloworld");
//extracting characters from string
//
console.log(chars);

let numbers2 = Array.from("123456789");
console.log(numbers2);