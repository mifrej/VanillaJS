export default () => {
  const myDetails = ['Milosz', 123, 'frejnik.com'];
  const [name, id, website] = myDetails;
  console.log(`${name}, ${id}, ${website}`);

  // destructuring with split
  const data = 'Basketball,Sports,90210,23,wes,bos,cool';
  const [itemName, category, sku, inventory] = data.split(',');
  console.log(`${itemName}, ${category}, ${sku}, ${inventory}`);

  // destructuring with spread ...rest
  const family = ['Milosz', 'Asia', 'Jurek', 'Eliza', 'Ala'];
  const [father, mother, ...children] = family;
  console.log(`Ojciec -> ${father}, Matka -> ${mother}, Dzieci -> ${children}`);

  // destructuring swap variables
  let inRing = 'Hulk Hogan';
  let onSight = 'The Rock';
  console.log(`In Ring -> ${inRing}, On Sight -> ${onSight}`);
  [inRing, onSight] = [onSight, inRing];
  console.log(`In Ring -> ${inRing}, On Sight -> ${onSight}`);
};
