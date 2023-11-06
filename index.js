// POST/PATCH/DELETE/GET

// ? review the objects in the db.json file and understand the structure of the data

// * Deliverable 1: get all the posts from localhost:3000/posts and render them on the page, each post should have a <img/>, <p> for caption, a <button>❤️</button> for likes, and a <p> for likes count

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // data.forEach(function (post) {
    //   console.log(post);
    // });

    data.forEach(renderPost);

    // for (let post of data) {
    //   console.log(post);
    //   renderPost(post);
    // }
  });

// img -> for image
// p -> caption
// button with ❤️ for like button
// p -> like count

let feed = document.querySelector(".feed");

function renderPost(post) {
  let img = document.createElement("img");
  img.src = post.image;

  let p = document.createElement("p");
  p.textContent = post.caption;

  let button = document.createElement("button");
  button.textContent = "❤️";

  let likeCount = document.createElement("p");
  likeCount.textContent = post.likes.count + " likes";

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  feed.append(img, p, button, likeCount, deleteButton);
  // this is the counter variable
  // * Deliverable 3: When a user clicks the like button, the button should update the number of likes on the page without having to refresh and should also update the number of likes in the backend
  let countLikes = post.likes.count;

  button.addEventListener("click", function () {
    console.log(countLikes);
    countLikes++;
    console.log(countLikes);

    console.log(post.id);
    // PATCH
    fetch("http://localhost:3000/posts/" + post.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        likes: {
          count: countLikes,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        likeCount.textContent = data.likes.count + " likes";
      });
  });

  deleteButton.addEventListener("click", function () {
    console.log("Deleting!!");

    fetch("http://localhost:3000/posts/" + post.id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        feed.removeChild(img);
        feed.removeChild(p);
        feed.removeChild(likeCount);
        feed.removeChild(button);
        feed.removeChild(deleteButton);
      }
    });
  });
}

// * Deliverable 2: Using the form, create a new post making a post request and add it to the page without having to refresh

let form = document.querySelector(".post-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target[0].value, e.target[1].value);

  let newPost = {
    image: e.target[1].value,
    caption: e.target[0].value,
    likes: {
      count: 0,
    },
    shares: {
      count: 0,
    },
  };

  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderPost(data);
    });
}

// * Deliverable 4: Add a delete button to each post. When a user clicks the delete button, the post should be deleted from the page without having to refresh and should also be deleted from the backend

// ! student excercise
// add a <button>🔁</button> to each post
// display the number of shared of each post
// when a user clicks the share button, the number of shares should increase by 1 and the backend should be updated
