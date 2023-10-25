// ? What is a function?

// !A function is a block of code that performs a specific task and can be reused whenever needed. Functions are the basic building blocks of javascript.

// !A function is initialized with the function keyword, followed by a name, followed by parentheses()

// *let's create a function that will print out a message to the console.

function printMessage() {
  console.log("Hello World!");
}

printMessage();

// output: Hello World!

// pass a custom parameter to the function

// create a function that takes two numbers parameters and returns the sum of those parameters

// create a function that takes two numbers and a string for the operator and then returns the result of the operator on the two numbers.

/* 
! student exercise:
? create a function `rectangleAreaCalculator` that takes the length and width of a rectangle and returns the area of the rectangle. (formula: length * width)
? create a function  that takes the length and width of a rectangle and returns the perimeter of the rectangle. (formula: 2 * (length + width)
? create a function that takes the radius of a circle and returns the area of the circle. (hint: use Math.PI)
*/

// ! function scope
// * variables declared inside a function are only accessible inside that function - Local Scope
// * variables declared outside of a function are accessible anywhere in the file - Global Scope

// ! first class functions - functions as variables
// * functions can be assigned to variables - function expressions

// example:

// function average(num1, num2) {
//   return (num1 + num2) / 2;
// }

// let avg = average;

// console.log(avg(5, 10));

// * functions can be passed as arguments to other functions - callback functions

// example:

// function greeting(funcArg, name) {
//   console.log(funcArg, name);
// }

// * functions can be returned from other functions

// example:
// function greeting() {
//   return function () {
//     console.log("Hello World!");
//   };
// }

// ! student exercise: callback functions
// ? create a function `calculate` that takes two numbers and a function as argument and then executes the function on the two numbers passed in.

// ! arrow functions
// * arrow functions are a shorter syntax for writing function expressions
// example:

// * rules:

// * if the function has a single parameter, the parentheses are optional
// example:

// * if the function has a single expression, the curly braces are optional
// example:

// * if the function has a single expression, the return keyword is optional
// example:

