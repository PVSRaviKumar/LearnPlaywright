//Accessing and Modifying
let statuses = ["pass", "fail", "skip"];

//accessing array elements using index
console.log(statuses[0]);
console.log(statuses[1]);
//console.log(statuses[-1]);// undefined 


//in the above values are accessed from left to right

//we can access the elements from right to left
//using at function with specifying -index
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
//console.log(statuses.at(-4));// undefined if we specify more index

// Modify the array values
statuses[1] = "blocked";
console.log(statuses);