export default () => {
  const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

  // Looping Array using for of with iterator
  for (const [idx, cut] of cuts.entries()) {
    // eslint-disable-next-line
    console.log(`${cut} with index ${idx}`);
  }

  // Loop of with arguments
  function addUpNumbers() {
    let finalNum = 0;

    // eslint-disable-next-line
    for (const num of arguments) {
      finalNum += num;
    }
    return finalNum;
  }

  // eslint-disable-next-line
  console.log(addUpNumbers(12, 23, 45, 2, 213, 43));

  // Loop of for string
  const name = 'Milosz';
  for (const char of name) {
    // eslint-disable-next-line
    console.log(char);
  }

  // Loop through dom collection
  const someParagraphs = `
    <p>Some paragraph 1</p>
    <p>Some paragraph 2</p>
    <p>Some paragraph 3</p>
    <p>Some paragraph 4</p>
  `;
  document.querySelector('#app').innerHTML = someParagraphs;

  const queryParagraphs = document.querySelectorAll('p');
  // eslint-disable-next-line
  console.log(queryParagraphs);

  for (const p of queryParagraphs) {
    // eslint-disable-next-line
    p.addEventListener('click', function pListiner() {
      // eslint-disable-next-line
      console.log(this.textContent);
    });
  }

  // Looping Object properties
  const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10,
  };

  // Object.keys(), Object.values()
  for (const [propName, val] of Object.entries(apple)) {
    // eslint-disable-next-line
    console.log(propName, ':', val);
  }
};
