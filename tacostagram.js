function getPostsFromAPI() {
  // Replace this with the URL of the JSON API that returns an array of image URLs
  const url = 'https://3000-suevinchoik-tacogramfin-1b0l8kcsbsi.ws-us108.gitpod.io/posts.json';

  // Make a GET request to the API
  fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(posts => {
      // Loop through the array of posts and build html for each
      for (let post of posts) {
        console.log(post);
        // alert("heyyyy") --> alert box 발생하게 하는 명령문

        // html for each post goes here
        let html = `
          <div class="col-md-6 col-lg-3">
            <img src="${post["image"]}" class="img-fluid">
            <p>${post["body"]}</p>
          </div>
        `;

        const postsDiv = document.querySelector('#posts');
        postsDiv.innerHTML += html
      };
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

const getPostsButton = document.querySelector('#get-posts-button');
getPostsButton.addEventListener('click', getPostsFromAPI);
