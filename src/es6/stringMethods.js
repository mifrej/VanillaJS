export default () => {
  const course = 'RFB2';
  const flightNumber = '20-AC2018-jz';
  const accountNumber = '825242631RT0001';

  const make = 'BMW';
  const model = 'x5';
  const colour = 'Royal Blue';

  console.log(course.startsWith('RFB'));

  // skip 3 first characters
  console.log(flightNumber.startsWith('AC', 3));

  // takes 11 first characters
  console.log(accountNumber.endsWith('RT', 11));

  console.log(flightNumber.includes('AC'));

  function leftPad(str, length = 20) {
    return `-> ${' '.repeat(length - str.length)}${str}`;
  }

  console.log(leftPad(make));
  console.log(leftPad(model));
  console.log(leftPad(colour));
};
