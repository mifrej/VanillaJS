/* eslint-disable strict */
console.log(this, '\nglobal scope this'); // global this is always main global object, in case of browsers it's a `window` object
this.milosz = 1;
console.log(milosz, '\nmilosz'); // implicitly lives on main global object (window)
console.log(this.milosz, '\nthis.milosz');
console.log(window.milosz, '\nwindow.milosz'); // global this is the main global object, which is window

function testThis() {
  console.log(this, '\ntestThis()'); // `this` here is window object as it is in none strict mode
}
testThis();

function testThisStrict() {
  'use strict';

  console.log(this, '\ntestThisStrict'); // default `this` is undefined in global functions in strict mode
}
testThisStrict();

const testObj = { // no `use strict` here
  makeTest() {
    console.log(this, '\ntestObj.makeTest()'); // here `this` points to the `testObj`. `testObj` is a caller of `makeTest`

    function internalMakeTest() {
      console.log(this, '\ninternalMakeTest() called inside of the testObj.makeTest() function body');
    }
    internalMakeTest();
  },
};
testObj.makeTest();

const testObjStrict = { // with `use strict`
  makeTest() {
    'use strict';

    console.log(this, '\ntestObj.makeTest()'); // here `this` points to an object, `testObjStrict` is a caller of `makeTest`

    function internalMakeTest() {
      console.log(this, '\ninternalMakeTest() called inside of the testObj.makeTest() function body');
    }
    internalMakeTest();
  },
};
testObjStrict.makeTest();

// When object property with function expression assigned to a variable
// it is loosing it's caller object, thus `this` changes its context again.
const funcHolder = testObj.makeTest;
funcHolder(); // here the `this` output is global or undefined (in strict mode) again
