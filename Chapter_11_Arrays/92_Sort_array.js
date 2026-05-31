let fruits = ["banna", "apple", "cheery"];
fruits.sort();
console.log("Sorting Strings");
console.log(fruits);

let number = [3, 1, 4];
number.sort();
console.log("Sorting numers");
console.log(number);

let numbs = [10, 1, 21, 2];
numbs.sort();
// by default numbers will be sorted in lexicographic Sorting
// Natural Sorting, lexicographic Sorting)
console.log(numbs);
console.log("Sorting Numbers");
console.log("Natural Sorting, lexicographic Sorting");

//Noraml sorting proper
numbs.sort((a, b) => a - b);// ascending
console.log(numbs);
numbs.sort((a, b) => b - a);// Descinding
console.log(numbs);