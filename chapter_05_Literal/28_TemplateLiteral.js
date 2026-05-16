// Template literally. 

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
//if we use dolllar${} with back tick ` it will  replace the
//first value inject the value dynamic

//single quote wiil have double quote
//double quote can't have single quote

console.log(fullname);

let fistname1 = "raviKumar";
let fullname1 = `Hi this is ${fistname} pallapothu`;


let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);


const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });


const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);

