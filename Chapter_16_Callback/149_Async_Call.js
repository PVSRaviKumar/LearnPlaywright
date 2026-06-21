console.log("Test 1 Started");
setTimeout(function () {
    console.log("Test2 :API Received");
}, 2000);

console.log("Test 3 moving to last");

/*
Test 1 Started
Test 3 moving to last
Teest2 :API Received

Bescause of ASync calls the Test 3 is printed first before Test2*/
