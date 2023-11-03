// let users = [];
// use the fetch function to make request to the url
fetch("https://large-sunset-yttrium.glitch.me/users/")
  // get the response
  .then((res) => res.json())
  // decode the response and get the data from the response
  .then((data) => {
    console.log(data);
    for (let user in data) {
      renderUser(data[user]);
    }
  });

// fetch("https://large-sunset-yttrium.glitch.me/users/16")
//   // get the response
//   .then((res) => res.json())
//   // decode the response and get the data from the response
//   .then((data) => {
//     console.log(data);
//     renderUser(data);
//   });

function renderUser(data) {
  let userDiv = document.querySelector(".user-cards");
  let name = document.createElement("p");
  name.textContent = data.name;

  let image = document.createElement("img");
  image.src = data.image;

  userDiv.append(name, image);
}

// let user1 = {
//   name: "SOmeone",
//   image: "kajdbfksjbksgnbarf",
// };

// let user2 = {
//   name: "SOmeone else",
//   image: "sjhdbfjhsabjhfgbsa",
// };

// renderUser(user1);
// renderUser(user2);
// let request = await fetch("https://large-sunset-yttrium.glitch.me/users/");

// let response = await request.json()
let userForm = document.querySelector("#user-form");
userForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  console.log(e);
  let newUser = {
    name: e.target.name.value,
    image: e.target.image.value,
  };

  renderUser(newUser);

  userForm.reset();
}
