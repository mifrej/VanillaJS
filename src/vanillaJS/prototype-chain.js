export default () => {
  const animal = {
    kind: 'human',
  };

  window.fruit = 'apple';

  const milosz = Object.create(animal, { food: { value: 'mango' } });

  console.log(milosz);
  console.log(milosz.kind);
  const nullObj = Object.create(null);
  const curlyObj = {};
  const curlyCreateObj = Object.create({});
  console.log(nullObj, 'Object create with null');
  console.log(curlyObj, 'curly only object');
  console.log(curlyCreateObj, 'Object create with curly');
  console.log(milosz.fruit);
};
