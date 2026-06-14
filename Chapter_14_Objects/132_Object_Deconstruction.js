
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
// we can take out of the keys from the object
const { name1, age } = user;
console.log(name1);// John
console.log(age);//30

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// destructuring
const { age } = user;

// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city); 