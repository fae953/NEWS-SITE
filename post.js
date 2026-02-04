// // Get post ID from URL
// const params = new URLSearchParams(window.location.search);
// const postId = params.get("id");

// // Fetch that post
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then((res) => res.json())
//   .then((post) => {
//     const container = document.getElementById("post");
//     container.innerHTML = `
//       <h1>${post.title}</h1>
//       <p>${post.body}</p>
//       <small>User ID: ${post.userId}, Post ID: ${post.id}</small>
//       <br><br>
//       <a href="index.html">⬅ Back to Home</a>
//     `;
//   })
//   .catch((error) => {
//     document.getElementById("post").innerHTML = "<p>Post not found.</p>";
//     console.error("Error fetching post:", error);
//   });
