export default () => {
  const person = {
    first: 'Milosz',
    last: 'Frejnik',
    country: 'Germany',
    city: 'Berlin',
    twitter: '@mifrej',
  };

  const { first, last, twitter } = person;
  console.log(`${first} ${last} ${twitter}`);

  const me = {
    first: 'Milosz',
    last: 'Frejnik',
    links: {
      social: {
        twitter: 'https://twitter.com/mifrej',
        facebook: 'https://facebook.com/mifrej',
      },
      web: {
        blog: 'https://frejnik.com',
      },
    },
  };

  // props renamed as desctructured
  const { twitter: tweet, facebook: fb } = me.links.social;
  console.log(`${tweet}, ${fb}`);

  // default values while destructuring
  const settings = { width: 300, color: 'black' };
  const {
    width = 100, height = 100, color = 'blue', fontSize = 25,
  } = settings;
  console.log(`settings destructured with defaults -> ${width}, ${height}, ${color}, ${fontSize}`);

  /**
   * Object Destructuring with variable renaming & default values
   * Ultimate example
   */
  const { w: wdth = 400, h: hght = 500 } = { w: 800 };
  console.log(`${wdth}, ${hght}`);
};
