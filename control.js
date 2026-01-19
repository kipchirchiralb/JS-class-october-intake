// Control structures and logic for the application
// loops and conditionals

// conditional statements-   if else, switch

let temperature = 23;

if (temperature > 25) {
  console.log("turn on cooling AC");
} else if (temperature > 21) {
  console.log("perfect temperature-- no action neede");
} else {
  console.log("turn on the heating AC");
}

// Task: using if else, do a grading system where >80 logs A, above 65 logs B , above 50 logs C , below 50 logs fail
let marks = 67;

// ASSIGNMENT: DO THE TWO CONDITIONS ABOVE USING SWITCH STATEMENT

// lOOPS -- for, while , do while
// loops are used to repeat a block of code multiple times until a certain condition is met
// a loop must have a starting point, an ending point and an increment/decrement

for (let i = -6; i <= 5; i += 3) {
  console.log("Iteration number: " + i);
}

// BLOCK {}
// be careful with infinite loops - a loop that never ends
// Task: using a loop, log all even numbers between 1 and 20, hint: use modulus operator %

// ASSIGNMENT: Explore while loop and do while loop
// NEXT Class - Functions
