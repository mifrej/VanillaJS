export default () => {
  const myPromise = new Promise((resolve, reject) => {
    resolve(123);
    // reject(new Error('failed'));
  });

  const resolvedPromise = myPromise.then(val => console.log('then', val));

  const rejectedPromise = myPromise.catch(err => console.log('catch', err));

  // `then` member function run on a promise, creates new distinct promise
  console.log(resolvedPromise === myPromise); // false
};
