// Here we need to use constructor key word to define the constructor
// No class name is used like in java to define the constructor

class Person {
    constructor() {
        console.log("I will be created when Obj is created!")
    }
    // Attributes
    name;
    email;
    salary;
    address;

    // Behaviour
    sleep() { }
    eat() { }
    walk() { }


}

let obj_ref = new Person();
// obg_ref = Is called the object reference (address)
// new Person(); -> Is the object with the new keyword

// console.log(obj_ref);