export default () => {
  const inventors = ['Einstein', 'Newton', 'Galileo'];
  const newInventors = ['Musk', 'Jobs'];
  inventors.push(...newInventors);
  console.log(inventors);

  const name = ['Milosz', 'Frejnik'];

  function sayMyName(first, last) {
    console.log(`Hey There ${first} ${last}`);
  }

  sayMyName(...name);
};
