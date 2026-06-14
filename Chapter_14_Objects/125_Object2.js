//objects are key value 
let studen1 = {
    name: "Ravi",
    age: 25,
    phone: 9876543210
};
let student2 = { "name": "Pramod" };
let student3 = { "name": "Suresh", "age": 30 };

//key will not be in double quotes but value will be in double quotes
let student4 = { name: "Suresh", age: 30 };

//below key is in double quote is JSON
let Json_student = { "name": "Suresh", "age": 30 };

//accessing the value of object
console.log(studen1.name);
console.log(studen1.age);
console.log(studen1.phone);

let a = { status: "Pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: "Pass" };
console.log(a1.status);

let b = a;
console.log(b.status);
b.status = "Fail";
console.log(a.status);
console.log(b.status)

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}