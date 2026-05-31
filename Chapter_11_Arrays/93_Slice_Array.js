// Slicing & Combining
let arr = [1, 2, 3, 4, 5];
//index = [0,1,2,3,4]
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log("org array Before slice");
console.log(arr);
let result = arr.slice(1, 3);//[start, end-1];
console.log("after silicing");
console.log(result);
console.log("original Array");
console.log(arr);
// does not mutuate actual means original array is not disturbed or changed

console.log(arr.slice(2, 4));// 3,4
console.log(arr.slice(2, 5));////3,4,5

//if we don't specify the next index it will take all the elements till end
console.log(arr.slice(1));// 2,3,4 5

// if we specify negative value it will take
//reverse i.e from last
console.log(arr.slice(-2));// 4,5

//if we specify the 0 it wil take all the elements
console.log(arr.slice(0));//1,2,3,4,5

//When we use slice the original array is not changed
let arr1 = [10, 20, 30, 40, 50];
let s = arr1.slice(1, 4);//[20,30,40]
console.log("orginal array : " + arr1);//[10,20,30,40,50]
console.log("result array after using slice :" + s);//[20,30,40]


//When we use slice the original array is not changed
let arr2 = [10, 20, 30, 40, 50];
let s1 = arr2.splice(1, 2);//[20,30]
console.log("orginal array : " + arr2);//[10,40,50]
console.log("result array after using spice :" + s1);