export default () => {
  function invertColor(color) {
    // eslint-disable-next-line prefer-template, no-bitwise
    return `#${('000000' + (0xFFFFFF ^ parseInt(color.substring(1), 16))
      .toString(16))
      .slice(-6)}`;
  }

  const key = 'pocketColor';
  const value = '#ffc600';

  const tShirt = {
    [key]: value,
    // computed property name
    [`${key}Opposite`]: invertColor(value),
  };

  console.log(tShirt);

  const keys = ['size', 'color', 'weight'];
  const values = ['medium', 'red', 100];

  const shirt = keys.reduce((obj, k) => ({ ...obj, [k]: values.shift() }), {});
  console.log(shirt);
};
