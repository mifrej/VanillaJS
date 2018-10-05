export default () => {
  document.querySelector('#app').innerHTML = `
    <style>
      button { font-size: 100px; }
      .on { background: #ffc600; }
    </style>
    <button id="pushy">Push Me</button>
  `;

  // to rebound context of selected element
  const button = document.querySelector('#pushy');
  // regular function in order to get the right `this`
  button.addEventListener('click', function clbck() {
    console.log(this);
    this.classList.toggle('on');
  });

  // for binding the method to the object
  const person = {
    points: 23,
    // arrow function would not work here
    score: function incr() {
      this.points += 1;
    },
  };
  console.log('person points before score', person.points);
  person.score();
  console.log('person points after score', person.points);

  // fo adding prototype method
  class Car {
    constructor(make, colour) {
      this.make = make;
      this.colour = colour;
    }
  }
  const volvo = new Car('volvo', 'black');
  const mercedes = new Car('mercedes', 'blue');

  Car.prototype.summarize = function summary() {
    return `This car is a ${this.make} in the colour ${this.colour}`;
  };
  console.log(mercedes.summarize());
  console.log(volvo.summarize());

  // when you need arguments object
  const orderChildren = function order() {
    // eslint-disable-next-line prefer-rest-params
    const children = Array.from(arguments);
    return children.map((child, i) => `${child} was child #${i + 1}`);
  };
  console.log(orderChildren('Jurek', 'Eliza', 'Alicja'));
};
