export default () => {
  const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Norton', age: 15 },
    { name: 'Sunny', age: 1 },
  ];

  const markup = `
    <ul class="dogs">
      ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
    </ul>
  `;

  document.querySelector('#app').innerHTML = markup;
};
