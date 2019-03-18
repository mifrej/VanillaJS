const path = require('path');
// Github API requires token for more often fetches
const envs = require('dotenv').config({ path: path.resolve('../../../../.env') });

if (envs.error) {
  throw envs.error;
}

const fetch = require('node-fetch');

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const headers = new fetch.Headers();
  console.log('fetching...');
  headers.append('Authorization', `token ${process.env.GITHUB_API_TOKEN}`);
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });
  return await response.json();
}

// await sequentially
async function showUserAndRepos(handle) {
  console.time('sequential');
  // first fetch is fired and is blocking the next fetch until resolve
  const user = await fetchFromGithub(`/users/${handle}`);
  // this fetch is not fired unless before one finished
  const repos = await fetchFromGithub(`/users/${handle}/repos`);

  console.log(user.name);
  console.log(`${repos.length} repos`);
  console.timeEnd('sequential');
}

// await concurrently
async function showUserAndReposConcurrent(handle) {
  console.time('concurrent');
  // the Promise suffixed vars are fired concurrently
  const userPromise = fetchFromGithub(`/users/${handle}`);
  const reposPromise = fetchFromGithub(`/users/${handle}/repos`);
  // here we retrieve them whenever done
  const user = await userPromise;
  const repos = await reposPromise;
  console.log(user.name);
  console.log(`${repos.length} repos`);
  console.timeEnd('concurrent');
}

// This fires fetches sequentially
// showUserAndRepos('mifrej');

// This fires fetches concurrently
showUserAndReposConcurrent('mifrej');
