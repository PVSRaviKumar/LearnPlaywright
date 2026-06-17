//Problem 1:

function inverted_triangle(num) {
    for (i = num; i > 0; i--) {
        for (j = 0; j < i; j++) {
            process.stdout.write("*");
        }
        console.log("");
    }
}

//Problem 2:

function pyramid(num) {
    for (i = 1; i < num; i++) {
        for (j = 1; j <= num - i; j++) {
            process.stdout.write(" ");
        }
        for (k = 1; k <= 2 * i - 1; k++) {
            process.stdout.write("*");
        }
        console.log("");
    }
}

//calling of a function
inverted_triangle(5);

console.log("$$$$$$$$$");
console.log();

pyramid(8);
