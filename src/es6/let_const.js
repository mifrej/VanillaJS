export default () => {
  const me = { name: 'milosz' };
  me.surname = 'frejnik';

  console.log(me);

  for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000);
  }

  for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000);
  }

  console.log(i); // global var
};
