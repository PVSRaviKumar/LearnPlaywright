// Different identifier naming styles in JavaScript

// 1. camelCase - common for variables and functions
var firstName = "Ravi";
var lastName = "Kumar";
var userAge = 25;
var isActiveUser = true;

// 2. snake_case - uses underscores between words
var first_name = "Ravi";
var last_name = "Kumar";
var user_age = 25;
var is_active_user = true;

// 3. PascalCase - common for classes and constructor functions
var FirstName = "Ravi";
var LastName = "Kumar";
var UserAge = 25;

// 4. UPPER_SNAKE_CASE - common for constants
var MAX_SPEED = 200;
var API_KEY = "12345-ABCDE";


// 5. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";


// 6. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array

// 5. invalid identifier examples (commented out)
// var first-name = "Ravi";    // invalid: hyphen not allowed
// var first name = "Ravi";    // invalid: spaces not allowed
// var 1stName = "Ravi";       // invalid: cannot start with a digit

console.log(firstName, lastName, userAge, isActiveUser);
console.log(first_name, last_name, user_age, is_active_user);
console.log(FirstName, LastName, UserAge);
console.log(MAX_SPEED, API_KEY);
