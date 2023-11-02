console.log("Hello World");

// * DOM-events

// ? What is dom events?
// * DOM events are actions that occur as a result of a user action or browser state change.
// Examples of DOM events:
// A mouse click -> click
// Hovering over an element -> mouseover
// Pressing the enter key -> keypress
// A page loading -> load
// A form being submitted -> submit

// What is an event listener?
// An event listener is a procedure or function in a computer program that waits for an event to occur.
// ! addEventListener() method attaches an event handler to the specified element

// ? Syntax
// element.addEventListener(event, function);
// addEventListener takes two arguments: the event and the function that will be called when the event fires(callback function). Basically, it's saying "Hey, when this event happens, do this thing."

// Example
let button = document.querySelector("#count-button");
let countText = document.getElementById("count");
console.log(countText);
let counter = 0;
button.addEventListener("click", function () {
  // alert("Button is clicked");
  counter++;
  console.log(counter);
  countText.textContent = counter;
});

button.addEventListener("mouseover", () => {
  console.log("You entered the button");
});

let toggleButton = document.getElementById("toggle-mode");
let html = document.querySelector("html");
let isDarkmode = false;

toggleButton.addEventListener("click", function () {
  console.log("Toggle button has been clicked");
  isDarkmode = !isDarkmode;

  console.log(isDarkmode);

  if (isDarkmode === false) {
    html.style.backgroundColor = "white";
  } else {
    html.style.backgroundColor = "grey";
  }
});

// ! Exercise
// create three buttons with the text "Red", "Green", "Blue". When you click on the button, the background color of the page should change to the color of the button.

// let redButton = document.querySelector("#red");
// let greenButton = document.querySelector("#green");
// let blueButton = document.querySelector("#blue");

// redButton.addEventListener("click", function () {
//   html.style.backgroundColor = "red";
// });

// greenButton.addEventListener("click", function () {
//   html.style.backgroundColor = "green";
// });

// blueButton.addEventListener("click", function () {
//   html.style.backgroundColor = "blue";
// });

// let buttons = document.querySelectorAll(".color");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     html.style.backgroundColor = button.textContent;
//   });
// }

let catButton = document.querySelector("#random-cat-button");

function createCat() {
  let image = document.createElement("img");

  image.src = "https://cataas.com/cat/gif";

  document.querySelector(".cat-image-container").append(image);

  image.addEventListener("click", function () {
    image.remove();
  });
}

catButton.addEventListener("click", createCat);

// create buttons in JS

let buttonContainer = document.createElement("div");

let redButton1 = document.createElement("button");
redButton1.textContent = "Red";

buttonContainer.append(toggleButton, redButton1);


let body = document.querySelector('body')
body.append(buttonContainer)