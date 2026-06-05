// Rest of the param.
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");
//Spread of params.
const arr = [1, 2, 3];
console.log(...arr);
//these must be used in the last position of the param list, otherwise it will throw an error.
function logResult2(suiteName, status, ...results) {
    console.log(suiteName);
    console.log(status);
    console.log(results);
}
