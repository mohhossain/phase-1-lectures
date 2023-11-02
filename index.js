console.log("Hello World!");

// DOM manipulation
// ! What is the DOM?
// * Document Object Model
// * Structured representation of an HTML document
// * The DOM is used to connect webpages to scripts like JavaScript
// * For each HTML element, there is an object in the DOM that we can access and interact with
// * DOM is a tree of nodes/elements created by the browser. Each nodes is a child of another node and so on.
// https://www.w3schools.com/js/pic_htmltree.gif

// ! DOM Selectors
// * Single element selectors: getElementById, querySelector

// * Multiple element selectors: getElementsByClassName, getElementsByTagName, querySelectorAll

// ! Creating Elements
// * document.createElement()
// * element.appendChild() -> append a single child to a parent node
// * element.append() -> append multiple child to a parent node

let titleDiv = document.querySelector(".title-div");
let h3 = document.createElement("h3");
h3.textContent = "Welcome back!!";
titleDiv.appendChild(h3);

// ! Adding Classes and IDs
// * element.className
// * element.id

h3.className = "welcome-back";

// ! Changing Attributes
// * textContent
// * innerText
// * innerHTML
// * value
// * src

// ! Changing Styles
// * backgroundColor
// * color
// * fontSize

let body = document.querySelector("body");
body.style.backgroundColor = "purple";

let html = document.querySelector("html");
html.style.backgroundColor = "black";

body.style.color = "white";

// ? DOM Excercise
// * Create an array of color names
// * Create an unordered list and add list items for each color in the array and append to the DOM (use foreach)
// * The color of the text for each list item should be the color of the array item

let colors = ["red", "green", "blue", "yellow", "pink", "black"];

let ul = document.createElement("ul");
body.append(ul);

for (let color of colors) {
  let li = document.createElement("li");
  li.textContent = color;
  li.style.color = color;
  ul.append(li);
}

// ! Student excercise

let user = {
  name: "Sally",
  age: 25,
  email: "sally@aol.com",
  favoriteFood: "pizza",
};

// * must be done in JavaScript:
// * create a div with a class "user-card", create 'p' tags to display the user's name, age, email, and favoriteFood in the div.

let userDiv = document.createElement("div");
userDiv.className = "user-card";

body.append(userDiv);

for (let key in user) {
  console.log(user[key]);
  let p = document.createElement("p");
  p.textContent = user[key];
  userDiv.append(p);
}

// or

// let name = document.createElement("p");
// name.textContent = user.name;

// let age = document.createElement("p");
// age.textContent = user.age;

// let email = document.createElement("p");
// email.textContent = user.email;

// let favoriteFood = document.createElement("p");
// favoriteFood.textContent = user.favoriteFood;

// userDiv.append(name, age, email, favoriteFood);
