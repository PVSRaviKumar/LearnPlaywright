let apicall = new Promise(function (resolve, reject) {

    reject("500 Error");

});
apicall.then(function (data) {
    console.log("success or resolve");
}).catch(function (error) {
    console.log(error);
})

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.