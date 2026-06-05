//default param for a function
//given while defining the function
function retry(testname, maxretries = 3, delay = 1000) {
    console.log(`Retrying ${testname} up to ${maxretries}times, ${delay}ms apart`);
}

retry("LoginTest");//if we don't specify value default values given in the fn defination will be considered 
retry("Registration page", 5, 2000);