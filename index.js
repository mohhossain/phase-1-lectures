// ? What is a function?

// !A function is a block of code that performs a specific task and can be reused whenever needed. Functions are the basic building blocks of javascript.

// !A function is initialized with the function keyword, followed by a name, followed by parentheses()

// *let's create a function that will print out a message to the console.

printMessage("Hello");

function printMessage(message) {
  console.log(message);
}

printMessage("Hello world");
printMessage("Good Morning!");
// output: Hello World!

// pass a custom parameter to the function

// create a function that takes two numbers parameters and returns the sum of those parameters
function sum(num1, num2) {
  console.log("Done!");
  return num1 + num2;
}

console.log("Done!");
// return statement:
// 1. returns a value, this value can be used anywhere in the code
//

let result = sum(20, 30);
let result2 = sum(19, 21);

console.log(result);
console.log(result2);

sum(2, 3);
// create a function that takes two numbers and a string for the operator and then returns the result of the operator on the two numbers.

function calculate(num1, num2, operator) {
  if (operator === "*") {
    return num1 * num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Not a valid operation!";
  }

  //   switch (operator) {
  //     case "+": {
  //       return num1 + num2;
  //     }
  //     case "-":
  //       return num1 - num2;
  //   }
}

/* 

calculate(2, 5, "*")
=> 10 
calculate(10, 5, "+")
=> 15
calculate(20, 2, "/")
=> 10


! student exercise:
? create a function `rectangleAreaCalculator` that takes the length and width of a rectangle and returns the area of the rectangle. (formula: length * width)
? create a function  that takes the length and width of a rectangle and returns the perimeter of the rectangle. (formula: 2 * (length + width)
? create a function that takes the radius of a circle and returns the area of the circle. (hint: use Math.PI)
*/

// ! function scope
// * variables declared inside a function are only accessible inside that function - Local Scope

// let message = "Good Morning!";
// function greeting() {
//   console.log(message);
// }

// console.log(message);
// * variables declared outside of a function are accessible anywhere in the file - Global Scope

// ! first class functions - functions as variables
// * functions can be assigned to variables - function expressions

// example:

// function average(num1, num2) {
//   return (num1 + num2) / 2;
// }

// let avg = average;

// console.log(avg(5, 10));
// console.log(average(20, 20));
// average(20, 20);

let average = function (num1, num2) {
  return (num1 + num2) / 2;
};

// * functions can be passed as arguments to other functions - callback functions

// example:

// function greeting(funcArg, name) {
//   console.log(funcArg, name);
// }

let goodMorning = function () {
  return "Good morning!";
};

function goodAfternoon() {
  return "Good afternoon";
}

function goodBye() {
  return "Good bye!";
}

// function sum() {
//   return 1;
// }

greeting("Hello", "Mohammad");

greeting(sum(1, 2), "Mohammad");

// * functions can be returned from other functions

// example:
function greeting() {
  return sum(1, 2);
}

console.log(greeting());

// ! student exercise: callback functions
// ? create a function `calculate` that takes two numbers and a function as argument and then executes the function on the two numbers passed in.

// ! arrow functions
// * arrow functions are a shorter syntax for writing function expressions
// example:

let hello = () => console.log("Hello");

// function hello() {
//   console.log("Hello");
// }

// function sum2(num1, num2) {
//   return num1 + num2;
// }

// * rules:

// * if the function has a single parameter, the parentheses are optional
// example:

// let hello = (message) => console.log(message);

// * if the function has a single expression, the curly braces are optional
// example:
// let hello = (message) => console.log(message);

// * if the function has a single expression, the return keyword is not allowed
// example:

const sum2 = (num1, num2) => {
  console.log("Getting the numbers...");
  return num1 + num2;
};

