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
  });
