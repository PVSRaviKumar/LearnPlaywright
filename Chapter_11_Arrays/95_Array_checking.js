//checking array

//Checking is array or not
let result = Array.isArray([1, 2, 3, 4]);//retunrs true or false
console.log(result);

let result2 = Array.isArray(["a"]);
console.log(result2);

let result3 = Array.isArray("a");//[] is missing
console.log(result3);

//every and some

//every AND
let res = [80, 90, 85, 95].every(s => s >= 70); //True //to check that ecah and 
// every element of the array satisfies the condition
//Hers s is not init and s is a temporary variable
console.log(res);

let res1 = [80, 60, 85, 69].every(s => s >= 70); //false //to check that ecah and 
// every element of the array satisfies the condition
console.log(res1);

//Playwright APi

let s = [200, 201, 202, 203].every(statuscode => statuscode >= 200);
console.log(s);

//some -AT LEAST  one MUSt PASS  OR 
[80, 60, 85].some(s => s < 70);// true