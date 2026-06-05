//if(statuscode>=200 and statuscode <300)
//Normall function
function validatestatuscode(Statuscode) {
    if (Statuscode >= 200 && Statuscode < 300) {
        console.log("Request is fine");
    }
}

//Functiion as expression
const validatestatuscode1 = function () {
    if (Statuscode >= 200 && Statuscode < 300) {
        console.log("Request is fine");
    }
}
//Arrow function
const validatestatuscode2 = () => {
    if (Statuscode >= 200 && Statuscode < 300) {
        console.log("Request is fine");
    }
}