/* eslint-disable import/prefer-default-export */
class Person {
  static introducePerson() {
    console.log(new this, 'this in static');
    console.log('static method');
  }

  constructor() {
    this.name = 'Milosz';
    this.surname = 'Frejnik';
  }
}

const Milosz = new Person();

export { Milosz, Person };
