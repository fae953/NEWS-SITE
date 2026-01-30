fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("posts");

    data.slice(0, 8).forEach(post => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      
      card.addEventListener("click", () => {
        window.location.href = `post.html?id=${post.id}`;
      });

      container.appendChild(card);

      const start = document.getElementById("getstarted")
        start.addEventListener("click", function () {
           window.location.href = `post.html?id=${post.id}`;
         });
    });
  });

