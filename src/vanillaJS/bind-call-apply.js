export default () => {
  function foo() {
    console.log(this);
  }
  foo.call(1); // calling function foo with passing 1 as a value of this


  // example of stabilizing `this` with `call` property
  const fooObj = {
    checkThis() {
      function innerFunc() {
        console.log(this);
      }
      innerFunc.call(this); // passing object scoped this to the inner function
    },
  };

  // Function call with the regular parentheses only -> ()
  fooObj.checkThis();
  // is equivalent to
  fooObj.checkThis.call(fooObj);
  // where with property call we pass the caller
  // If no caller is passed than this becomes either `window` or `undefined` (strict mode)

  // Sending additional parameters by using `call`
  function testParams(a, b, c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
  }
  testParams.call(1, 2, 3, 4); // 1 is value of this and the rest are function arguments

  console.log('====================');
  // same with using apply
  testParams.apply(1, [2, 3, 4]); // for variable number of parameters

  // Use case for using `apply`
  function summingFunc() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index += 1) {
      // eslint-disable-next-line prefer-rest-params
      const element = arguments[index];
      sum += element;
    }
    console.log(sum);
    return sum;
  }

  const randomGeneratedNums = [23, 3, 23, 1, 2, 43, 56, 67, 7, 8, 9];

  // eslint-disable-next-line prefer-spread
  summingFunc.apply(null, randomGeneratedNums); // we don't care about passing this here

  console.log('====================');
  /**
   * `bind` method
   *
   */
  // eslint-disable-next-line func-names
  const boundedFunc = function () {
    console.log(this, 'boundedFunc');
  }.bind(1); // this works only for function expressions
  // `bind` is only applicable for function object created by function expression

  boundedFunc();
};
