let apicall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "user data"
    })

});
apicall.then(function (response) {
    console.log(response);
}
)

// .then() runs ONLY when the promise resolves successfully.