export default (x, y) => new Promise((resolve, reject) => {
  if (x === undefined || y === undefined) {
    reject(new Error('Must provide two parameters'));
  } else {
    resolve(x + y);
  }
});
