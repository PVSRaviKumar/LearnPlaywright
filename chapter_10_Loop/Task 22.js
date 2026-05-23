/* Triangle Classifier:

Write a program that classifies a triangle based on its side lengths.
 Given three input values representing the lengths of the sides,
  determine if the triangle is equilateral (all sides are equal), 
  isosceles (exactly two sides are equal), or scalene (no sides are equal).
   Use an if-else statement to classify the triangle. */

let A = 5, B = 5, C = 5;
if (A === B && B === C && A === C) {
    console.log("The triangle is equilateral");
} else if (A === B || B === C || A === C) {
    console.log("The triangle is isosceles");
}
else {
    console.log("The triangle is scalene");
}


/* FizzBuzz Test:

Write a program that prints numbers from 1 to 100.
 However, for multiples of 3, print "Fizz" 
 instead of the number, and for multiples of 5,
  print "Buzz." For numbers that are multiples of both 3 and 5,
 print "FizzBuzz." */


for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz.");
    }
    else if (n % 3 == 0) {
        console.log("Fizz.");
    }
    else if (n % 5 == 0) {
        console.log("Buzz.");
    }
    else
        console.log(n)

}