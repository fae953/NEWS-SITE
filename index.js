// CREATE a new post
const postData = {
  title: 'JavaScript Posts',
  
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log("Created post:", response);
  });

// READ multiple posts
fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  .then((res) => res.json())
  .then((posts) => {
    const container = document.getElementById("posts");
    container.innerHTML = "";

    posts.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imagePath = "img/news.jpg";
      card.innerHTML = `
       <img src="${imagePath}" alt="Post image" class="card-img"/>
      <a href="post.html?id=${post.id}" class="post-link">${post.title}</a> <br/> <br/> 
        <button class="delete-btn">Delete</button>
      `;

      //event listener for Delete button
      card.querySelector(".delete-btn").addEventListener("click", () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
          method: "DELETE",
        })
          .then(() => {
            // Remove the card from the DOM
            container.removeChild(card);
            console.log(`Post ${post.id} deleted`);
          })
          .catch((error) => console.error("Error deleting post:", error));
      });

      container.appendChild(card);
    });
  });



//   // UPDATE a post
// // Update post with id = 3
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "Updated JavaScript Post",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => res.json())
//   .then((response) => {
//     const container = document.getElementById("posts");

//     // Find the existing card with matching Post ID
//     const existingCard = Array.from(container.children).find((card) => {
//       const small = card.querySelector("small");
//       return small && small.textContent.includes(`Post ID: ${response.id}`);
//     });

//     if (existingCard) {
//       // Update the content of the existing card
//       existingCard.querySelector("h2").textContent = response.title;
//       existingCard.querySelector("p").textContent = response.body;
//     } else {
//       // If not found, create a new card and add it to the top
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `
//         <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
//         <p>${response.body}</p>
//         <small>User ID: ${response.userId}, Post ID: ${response.id}</small>
//       `;
//       container.prepend(card);
//     }
//   });
