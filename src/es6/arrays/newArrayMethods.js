export default () => {
  const peopleHtml = `
    <div class="people">
      <p>Milosz</p>
      <p>Asia</p>
      <p>Jurek</p>
      <p>Eliza</p>
      <p>Alicja</p>
    </div>
  `;
  document.querySelector('#app').innerHTML = peopleHtml;

  /**
   * Array from NodeList
   * Second argument in Array.from is map function
   */
  const people = Array.from(document.querySelectorAll('.people p'), person => person.textContent);
  // eslint-disable-next-line no-console
  console.log(people);

  /**
   * Array from arguments (not real array)
   *
   */
  function sumAll() {
    // eslint-disable-next-line prefer-rest-params
    const nums = Array.from(arguments);
    return nums.reduce((prev, next) => prev + next, 0);
  }

  const sums = sumAll(23, 345, 67, 2, 45, 23);
  // eslint-disable-next-line
  console.log(sums);

  /**
   * Array.of
   */
  const ages = Array.of(12, 34, 67, 678, 34, 65, 78);
  // eslint-disable-next-line no-console
  console.log(ages);
};
