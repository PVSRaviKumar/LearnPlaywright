// 23_null_undefined.js

// In JavaScript, `undefined` and `null` are both used to represent absence of value,
// but they are used in different situations.


// ============================================================
// Topic: null vs undefined in JavaScript
// File: 23_null_undefined.js
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns "no value" or "empty".
                 It is intentional absence of any value.
*/


// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned
console.log(userName);        // undefined
console.log(typeof userName); // "undefined"

function greet() {
    // no return statement
}
console.log(greet());         // undefined


// --------------------------------------------------------
// 2. null
// --------------------------------------------------------

let profilePicture = null; // developer explicitly says "no picture yet"
console.log(profilePicture);        // null
console.log(typeof profilePicture); // "object"  <-- known JS quirk!

let score = 100;
score = null; // developer clears the value intentionally
console.log(score); // null


// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/


// --------------------------------------------------------
// 4. Practical Comparisons
// --------------------------------------------------------

let a;
let b = null;

console.log(a == b);   // true  (loose equality sees them as similar)
console.log(a === b);  // false (strict equality: different types)

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"


// --------------------------------------------------------
// 5. When to use what?
// --------------------------------------------------------

/*
  Use undefined:
  - When checking if a variable/property has been initialized.
  - Let JS handle it; don’t assign undefined manually.

  Use null:
  - When you want to deliberately clear or reset a value.
  - When a function should return "nothing" on purpose.
  - To represent an empty or unknown object reference.
*/


// --------------------------------------------------------
// 6. Quick Check Function
// --------------------------------------------------------

function checkValue(value) {
    if (value === undefined) {
        return "Value is undefined (not assigned yet)";
    }
    if (value === null) {
        return "Value is null (explicitly empty)";
    }
    return "Value is: " + value;
}

console.log(checkValue());           // undefined
console.log(checkValue(null));       // null
console.log(checkValue("hello"));    // hello


// ============================================================
// END
// ============================================================


// 1. undefined
// A variable is `undefined` when it has been declared but not assigned a value.
let a;
console.log('a:', a); // a: undefined
console.log('typeof a:', typeof a); // typeof a: undefined

function noReturn() {
    const x = 5;
}
console.log('noReturn():', noReturn()); // noReturn(): undefined

// 2. null
// `null` is an explicit assignment that means "no value" or "empty value".
let b = null;
console.log('b:', b); // b: null
console.log('typeof b:', typeof b); // typeof b: object (this is a long-standing JS quirk)

// 3. Comparison examples
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false

// 4. Practical usage
// undefined is usually created by the engine when a variable is uninitialized,
// while null is typically used by developers to indicate an intentional absence of value.

let user = null; // user is intentionally empty for now
let job; // job is undefined because it has not been assigned yet

console.log('user:', user); // user: null
console.log('job:', job);   // job: undefined

// 5. Example with object properties
const product = {
    name: 'Phone',
    price: 299,
    description: null, // intentionally no description yet
};

console.log('product.description:', product.description); // null
console.log('product.color:', product.color); // undefined because property does not exist
