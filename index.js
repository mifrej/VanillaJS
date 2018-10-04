import fucntionCurrying from './src/vanillaJS/currying';
import let_const from './src/es6/let_const';
import arrowFunction from './src/es6/arrowFunction';

// VanillaJS - write a "sum" function which can take one or two arguments

const sum = (num1, num2) => {
  return num2 ? num1 + num2 : num2 => num1 + num2;
};

console.log(sum(2, 3));
console.log(sum(2)(3));

// fucntionCurrying();
// let_const();
arrowFunction();
