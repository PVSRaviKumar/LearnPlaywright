let Rajkumar_age = 18;
let raj_will_go_to_goa = Rajkumar_age >= 18 ? "Yes, Rajkumar will go to Goa" : "No, Rajkumar will not go to Goa";
console.log(raj_will_go_to_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testresult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testresult);

let environment = "staging";
let baseurl = environment === "prod" ? "https//api.example.com" : "https//staging-api.example.com";
console.log(baseurl);

let iSCI = true;
let browserMode = iSCI ? "headless" : "headed";
console.log("Launching browser in", browserMode, "Mode");

let responseTime = 850;//ms
let sla = 1000;//ms
let slaStatus = responseTime <= sla ? "with in SLA" : "SLA breached";
console.log("Response time is", responseTime, "ms and it is", slaStatus);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);

// nested ternary operator
// mutiple conditions
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log("Grade:", grade);

let age = 26;
let is_pramod_age = age > 18 ? "yes he wil go to GOA" : "No he will not go to GOA";
console.log(is_pramod_age);

let age_promod = 45;
let is_promod = age > 18 ? (age > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(is_promod);

let statusCode = 404;
let category =
     statusCode < 300 ? "Success" :
          statusCode < 400 ? "Redirection" :
               statusCode < 500 ? "Client Error" : "Server Error";
console.log("Status code", statusCode, "belongs to category:", category);
console.log(`Status code ${statusCode}: ${category}`);

let temp = 35;
let feel = (temp >= 40) ? "very hot" :
     (temp >= 30) ? "hot" : (temp >= 20) ? "warm"
          : (temp >= 10) ? "cool" : "cold";
console.log("7. Temperatur feel", temp, "|Feel:", feel);              