export default () => {
  function returnSum(a, b, fn) {
    const c = a + b;
    return fn(c);
  }

  returnSum(2, 3, (...args) => console.log(...args));
};
