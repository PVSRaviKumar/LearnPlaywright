//Adding and Removing values from the arrays
let arr = [1, 2, 3];

//To add elements at the end use push method
console.log("Before Add: " + arr);
arr.push(4);
console.log("After add: " + arr);

//to remove the elements from the end use pop method
arr.pop();
console.log("After removing :" + arr);

//to add multiple itens 
arr.push(4, 5);
console.log("After adding two elements :" + arr);

arr.pop(4, 5);//it always removes only one element which is last element in the array
console.log("After removing two elements :" + arr);

//Add elements at the beigning of the array
arr.unshift(0);
console.log("After adding one element at the beigning  :" + arr);

//remove the element at the beigning of the array
arr.shift();
console.log("After remove  elements from beigning :" + arr);