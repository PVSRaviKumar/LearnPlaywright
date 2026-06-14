const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
//to get the keys use Object.keys(<varname>)
//to get the values use Object.values(<varname>)
console.log(Object.values(obj));
// to get the  in key value pair use entries
//o get the values use Object.entries(<varname>)
console.log(Object.entries(obj));

// to iterate  use for loop
const user = { name: "ravi", age: 47 };
/* for (const key in user) {
    console.log('${key}:${user[key]}');//here we are using template literal
} */

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// The other way of printing the values of objects is as follows but not used
// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });