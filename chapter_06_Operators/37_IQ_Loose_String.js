console.log(0 == "");
console.log(0 == "0");
console.log("" == "0"); //false //  🤯 (transitivity broken!)


console.log(0 == false);
console.log(null == 0);//false
console.log(null == undefined);
console.log(null === undefined);