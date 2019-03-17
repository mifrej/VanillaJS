const fetch = require('node-fetch');

function showGithubUSerPromise(handle) {
  const url = `https://api.github.com/users/${handle}`;
  return new Promise((resolve, reject) => {
    const res = fetch(url).then(result => result.json());
    if (res.status === 200) {
      resolve(res);
    } else {
      reject(Error(res.message));
    }
  });
}

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    // async function when throw error becomes rejected promise
    throw new Error(body.message);
  }
  return body;
}

// catch error with `.catch`
showGithubUser('idonotexist-fff')
  .then((user) => {
    console.log(user.name);
    console.log(user.location);
  })
  .catch((err) => {
    console.log(`Error ${err.message}`);
  });

// async function with regular try catch block
async function tryCatchShowGithubUser(handle) {
  try {
    const user = await showGithubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// tryCatchShowGithubUser('aqq-not-there');

showGithubUSerPromise('hey-no-me')
  .then((user) => {
    console.log(user.name);
    console.log(user.location);
  })
  .catch(err => console.log(`Error: ${err.message}`));
