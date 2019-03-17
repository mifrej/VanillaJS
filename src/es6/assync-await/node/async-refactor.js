const fetch = require('node-fetch');

async function asyncShowGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}

// refactor above to return the resolve value from promise
async function refactoredAsyncShowGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return response.json();
}


refactoredAsyncShowGithubUser('mifrej').then((user) => {
  console.log(user.name);
  console.log(user.location);
});
