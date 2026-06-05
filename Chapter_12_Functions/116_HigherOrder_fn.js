// Higher-Order Functions
// A function that takes a function as argument or returns a function.
// Function as argument
function runWithLoggin(testFn, testName) {
    console.log(`Starting : ${testName}`)
    let result = testFn();
    console.log(`Fineshed : ${testName}`)
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login Test"); // function as argument passed
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");