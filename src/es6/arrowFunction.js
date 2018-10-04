export default () => {
  const race = '100m Dash';
  const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

  // implicit return with object literal ({})
  const win = winners.map((winner, idx) => ({
    name: winner,
    race,
    place: idx + 1
  }));
  console.table(win);

  // implicit return, single line
  const ages = [3, 5, 34, 56, 67, 89, 66];
  const old = ages.filter(age => age > 60);
  console.log(old);
};
