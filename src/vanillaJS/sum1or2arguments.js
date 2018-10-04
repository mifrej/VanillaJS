export default () => {
  // VanillaJS - write a "sum" function which can take one or two arguments

  const sum = (num1, num2) => (num2 ? num1 + num2 : num2 => num1 + num2);

  console.log(sum(2, 3));
  console.log(sum(2)(3));
};
