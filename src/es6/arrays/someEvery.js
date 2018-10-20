export default () => {
  const ages = [2, 14, 18, 19];

  // is there at least one adult in the group?
  const isAtLeastOneAdult = ages.some(age => age >= 18);
  // eslint-disable-next-line no-console
  console.log(`Is at least one adult? ${isAtLeastOneAdult}`);

  const areAllAdults = ages.every(age => age >= 18);
  // eslint-disable-next-line no-console
  console.log(`Are All adults? ${areAllAdults}`);
};
