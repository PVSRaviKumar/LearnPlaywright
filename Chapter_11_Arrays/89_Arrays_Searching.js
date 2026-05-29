let result = ["pass", "fail", "pass", "error", "fail"];

//indexOf()--retunrs the first index ,or -1 if not found
//The above fn is used to search for a element it returns the
//first occurance index of the element

//console.log(result.indexOf("fail"));

//console.log(result.indexOf("skip")); //-1 
//the specified value is not present in the array

//lastIndexOf() --searches from the end

//console.log(result.lastIndexOf("fail"));//4

//includes fn is used to check whether specified 
//element is present or not
//retun true or false

//console.log(result.includes("fail"));//true
//console.log(result.includes("blocked"));//false

//find function--returns  fist matching element
//returns the new array with specified condition matched

let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);
//console.log(r);

// find — returns first matching element
let nums1 = [10, 25, 30, 45];
let r1 = nums1.find(x => x > 20);
console.log(r1);

// findIndex
console.log(nums.findIndex(n => n > 20)); // 1, 2, 3

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3