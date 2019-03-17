const fetch = require('node-fetch');

// traditional promise based function
function showGithubUser(description, handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then(response => response.json())
    .then((user) => {
      console.log(user.name);
      console.log(user.location);
    });
  console.log(description);
}

// same function with using async
async function asyncShowGithubUSer(description, handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(description);
  console.log(user.name);
  console.log(user.location);
}

showGithubUser('Regular function with then', 'mifrej');
asyncShowGithubUSer('Async await function', 'dalori');
