export default () => {
  async function foo() {
    return 123;
  }

  foo().then(value => console.log('async function always return promise', value));

  // set of examplary vars with promises or not
  const notAPromise = 456;
  const resolvePromise =
    new Promise(resolve => resolve(123));
  const rejectPromise =
    new Promise((resolve, reject) => reject(new Error('Hello')));

  async function testPromises() {
    const res1 = await notAPromise;
    console.log({ forNotAPromise: res1 });
    const res2 = await resolvePromise;
    console.log('await pause until the promise is resolved');
    const res0 = await new Promise(res => setTimeout(res('I\'m resolved'), 3000));
    console.log('continue after sequentially', res0);
    console.log({ promiseThatWillResolve: res2 });
    try {
      const res3 = await rejectPromise;
      console.log('Never get here as promise rejects by default and throws', res3);
    } catch (e) {
      console.log({ promiseThatWillReject: e.message });
    }
  }

  testPromises();
};
