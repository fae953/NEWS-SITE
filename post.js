// Get post ID from URL
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

// Fetch single post
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((res) => res.json())
  .then((post) => {
    const container = document.getElementById("post-container");
    container.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <small>User ID: ${post.userId}, Post ID: ${post.id}</small>
      <h3>Comments</h3>
      <div id="comments"></div>
    `;

    // Fetch comments for this post
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((comments) => {
        const commentsContainer = document.getElementById("comments");
        comments.forEach((comment) => {
          const commentDiv = document.createElement("div");
          commentDiv.classList.add("comment");
          commentDiv.innerHTML = `
            <h4>${comment.name} <small>(${comment.email})</small></h4>
            <p>${comment.body}</p>
          `;
          commentsContainer.appendChild(commentDiv);
        });
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching post:", error);
  });
