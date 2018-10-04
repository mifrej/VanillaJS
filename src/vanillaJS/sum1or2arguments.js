export default () => {
  // VanillaJS - write a "sum" function which can take one or two arguments
  const sum = (x, y) => (y ? x + y : (z = y) => x + z);
  // `z` argument is used to not shadow `y` from outer scope
  // ES5 version
  function sumNumbers(x, y) {
    if (y) {
      return x + y;
    }
    return function innerAdder(z) {
      return x + z;
    };
  }
  console.log(sum(2, 3));
  console.log(sum(2)(3));
  console.log(sumNumbers(2, 2));
  console.log(sumNumbers(2)(2));
};
