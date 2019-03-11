export default () => {
  const run = (cb) => {
    setTimeout(() => {
      cb('1s');
      setTimeout(() => {
        cb('2s');
        setTimeout(() => {
          cb('3s');
        }, 1000);
      }, 1000);
    }, 1000);
  };

  // run(time => console.log(time));

  // Same functionality with using Promise and assync await

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const runAsync = async (cb) => {
    await delay(1000);
    cb('1s');
    await delay(1000);
    cb('2s');
    await delay(1000);
    cb('3s');
  };

  runAsync(time => console.log(time));
};
