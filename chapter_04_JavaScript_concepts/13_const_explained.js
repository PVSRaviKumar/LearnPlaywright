const BASE_URL = "https://api.example.com/data";
//const BASE_URL = "https://api.example.com/other-data"; // SyntaxError: Identifier 'BASE_URL' has already been declared
// This will throw an error because we cannot redeclare a constant variable

//BASE_URL = "https://api.example.com/other-data"; // TypeError: Assignment to constant variable
// This will throw an error because BASE_URL is a constant

let name = "Alice";
name = "Bob"; // This is allowed because 'name' is declared with 'let'
// let name = "Charlie"; // SyntaxError: Identifier 'name' has already been declared

{
    let name = "Charlie"; // This is allowed because it's in a different block scope
}