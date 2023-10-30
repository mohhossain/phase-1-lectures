// Deliverables

// JavaScript Fundamentals and Data Structures Workshop

// Workshop Introduction:
// In this workshop, we'll cover JavaScript fundamentals and data structures to help you build a strong foundation.
// Let's get started!

// Variables and Data Types

// 1. Declare a variable 'age' and assign your age to it.
const age = 27;

// 2. Declare a constant 'name' and assign your name to it.
const name = 'Becca';

// 3. Declare a variable 'isStudent' and assign a boolean value to it.
const isStudent = true;
console.log(isStudent);

// 4. Declare a variable 'score' and assign a numeric value to it.
const score = 3

// 5. Declare an array 'fruits' and add a few different fruit names to it.
const fruits = ["mango", "apple", "banana"]
// 6. Declare an object 'person' with properties 'name' and 'age'.

// Console Output

// 7. Use 'console.log' to display a welcome message to the console.

// Math Operations

// 8. Perform addition and multiplication operations on two numbers and store the results in variables.


// Strings

// 9. Create a string variable 'greeting'
// 10. Use string interpolation to create a message by combining 'greeting' and 'name'.

// Conditional Statements

// 11. Write an 'if' statement to check if your age is greater than or equal to 18.
if (age >= 18) {
    console.log("Congratulations!");
} else if (age >= 15 && age < 18) {
    console.log("You're young")
} else {console.log("Congrats")}


// 12. Use 'if-else' to display different messages based on isStudent value.
if (isStudent === true) {
    console.log("Welcome to Flatiron");
} else {
    console.log("Welcome!");
}
// a. If isStudent is true, display 'Welcome to Flatiron!'
// b. If isStudent is false, display 'Welcome!'

// Switch Statements // Only does specific values
switch (score) {
    case 3: {
        console.log("You have the min required GPA");
    }
    break;
    case 4: {
        console.log("Cool");
    }
}

// Use a switch statement to display different messages based on the value of 'score'.

// Ternary Operator
isStudent ? console.log(true) : console.log(false);
score >= 3 ? console.log("good job") : console.log("try again");

// Use a ternary operator to display different messages based on the value of 'score'.

// Loops

// 13. Use a 'for' loop to print numbers from 1 to 5.
// 14. Use a 'while' loop to print numbers from 1 to 5.

for (let i = 0; i < 6; i++) {
    console.log(i);
}

let x = 1;
while (x < 6) {
    console.log(x);
    x++
}

// Arrays

// 15. Declare an array 'colors' with a few color names.
let colors = ["red", "blue", "yellow", "green", "black"];
for (let i = 0; i < colors.length; i++) {
    console.log(i + " " + colors[i]);
}

// Loop through the 'colors' array and print each color to the console.
// Loop through the 'colors' array and print the index of each color to the console.

// ! difference between 'for', 'for...of', and 'for...in' loops

for (let i of colors) {
    console.log(i);
}

for (let i in colors) {
    console.log(colors[i]);
}

// 16. Add a new color to the 'colors' array.
colors.push("yellow");
console.log(colors[colors.length -1]);

// 17. Access the first and last color in the array.


// access the color at a specific index.

// find the index of a color.
console.log(colors.indexOf('red'));

// check if a color exists in the 'colors' array.
console.log(colors.includes('red')); // prints a boolean

// remove the last color from the 'colors' array.
console.log(colors.pop());

// remove the first color from the 'colors' array.
console.log(colors.shift());