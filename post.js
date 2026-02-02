const params = new URLSearchParams(window.location.search);
const postId = params.get("id");


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(post => {
    const container = document.getElementById("post");

    container.innerHTML = `
      <div class="card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;

    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(res => res.json())
        .then(comments => {
          const commentsContainer = card.querySelector(".comments");
          comments.slice(0, 3).forEach(comment => { 
            const commentEl = document.createElement("p");
            commentEl.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
            commentsContainer.appendChild(commentEl);
          });
        });

  });
