let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();// to remove the last element of the array
console.log(browser);

let removed = browser.shift();//to remove the fist element of the array
console.log(browser);
console.log(removed);

//for loop for iterating the array
for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}