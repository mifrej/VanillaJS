export default () => {
  console.log('rest params');

  // ...amounts (continuous rest of arguments) are cumulated to array
  function convertCurrency(rate, ...amounts) {
    console.log(amounts);
    return amounts.map(amount => amount * rate);
  }
  console.log(convertCurrency(4.2, 5, 10, 20, 50));

  // ...players are (rest of the team) cumulated to array
  const team = ['Asia', 'Milosz', 'Jurek', 'Eliza', 'Ala'];
  const [captain, assistant, ...players] = team;
  console.log(captain, assistant, players);
};
