fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("posts");

    data.slice(0, 6).forEach(post => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = ` 
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <div class="comments"></div>
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

      
      card.addEventListener("click", () => {
        window.location.href = `post.html?id=${post.id}`;
      });

      container.appendChild(card);
    });
  });