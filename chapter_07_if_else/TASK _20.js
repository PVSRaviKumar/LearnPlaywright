/*Question 1 — HTTP Status Code Categorizer

Problem: Given an HTTP status code, print which category it belongs to.

200–299 → Success

300–399 → Redirection

400–499 → Client Error

500–599 → Server Error

Anything else → Invalid
Sample Input/Output:

Input: 404
Output: Client Error

Input: 200
Output: Success


Question 2 — Test Case Pass/Fail Verdict
Problem: Compare actual result with expected result and print test verdict.
Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

https://emojipedia.org/check-mark-button

Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium

Question 4 — Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment

Question 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:
Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful*/



//  HTTP Status Code Categorizer


let statusCode = 200;

if (statusCode >= 200 && statusCode < 300) {

    console.log(statusCode + " is a Success status code");

} else if (statusCode >= 300 && statusCode < 400) {

    console.log(statusCode + " is a Redirection status code");

} else if (statusCode >= 400 && statusCode < 500) {

    console.log(statusCode + " is a client error status code");

} else if (statusCode >= 500 && statusCode < 600) {

    console.log(statusCode + " is a server error status code");

} else {
    console.log(statusCode + " is an unknown status code");

}



// user login

let expected = "Login successful";
let actual = "Login successful";

if (actual === expected) {
    console.log("Login Successful:" + " Test passed !    ");
} else {
    console.log("Login Failed!");
}

let expected1 = "login successful";
let actual1 = "Invalid Credentials";
if (actual1 === expected1) {
    console.log("Login Successful!");
} else {

    console.log("Login Failed:" + " ❌ Test Failed — Expected: " + expected1 + ", Got: " + actual1);
}


// cBug Severity Classifier

let bugSeverity = 9;

if (bugSeverity >= 9 && bugSeverity <= 10) {
    console.log("Bug severity is High :" + "Critical (block release)");

} else if (bugSeverity >= 7 && bugSeverity <= 8) {
    console.log("Bug severity is Medium :" + "High");

} else if (bugSeverity >= 4 && bugSeverity <= 6) {
    console.log("Bug severity is Medium :" + "Medium");

} else if (bugSeverity >= 1 && bugSeverity <= 3) {
    console.log("Bug severity is Low");
} else {
    console.log("Invalid bug severity");
}


// Health reporer


let healthScore = 85;

if (healthScore === 100) {
    console.log("Health score is 100%:" + "  → Green Build");

} else if (healthScore >= 90 && healthScore < 99) {
    console.log("Health score is 90–99% → Stable:" + " (investigate failures)");

} else if (healthScore >= 70 && healthScore < 89) {
    console.log("Health score is 70–89% :" + " → Unstable");

} else {
    console.log("Health score is Below 70%:" + "   → Broken Build (block deployment)");
}
console.log(" improve your health ")


// falied login attempt
let attempts = 1;

switch (attempts) {

    case 0:
        console.log("Login successful");
        break;

    default:

        // Check attempts using if-else
        if (attempts < 3) {
            console.log((3 - attempts) + " attempt left before lockout");
        } else {
            console.log("🔒 Account Locked — Contact support");
        }
}