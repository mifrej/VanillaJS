/*
* Function currying
*/

export default () => {
  // Traditional way
  const dragon = (name, size, element) =>
    name + " is a " + size + "dragon that breathes " + element + "!";

  // Currying

  const dragonCurried = name => size => element =>
    name + " is a " + size + "dragon that breathes " + element + "!";

  console.log(dragon("fluffykins", "tiny", "lightning"));

  console.log(dragonCurried("fluffykins")("tiny")("lightning"));
};
