//Single quotes
let a = 'Hello';
//Double Quotes
let b = "World";

let name1 = "Alice";
let msg = `Hello! + ${name1}! 2+2 = ${(2 + 2)}`;
console.log(msg);

//Multi line
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
  ds
  das
  das
  das
  d
  asd
  asd
  a
`;
console.log(report);
let longstory = `
I want to tell you a very long story 
where we had a lot of students, w
hich we basically have a lot of tests and blah
 blah blah blah blah blah. 
`;

console.log(String(200)); // "200"
// String(true); -> // "true"
//String(null); // "null"
String([1, 2]); // "[1,2]"

// string - data type
// String -> interface( which will help you to create a new strings)