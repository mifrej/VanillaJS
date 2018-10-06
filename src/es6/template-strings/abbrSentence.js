export default () => {
  const dict = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheets',
    JS: 'JavaScript',
  };

  const first = 'Milosz';
  const last = 'Frejnik';

  function addAbbr(strings, ...values) {
    const abbreviated = values.map((value) => {
      if (dict[value]) {
        return `<abbr title="${dict[value]}">${value}</abbr>`;
      }
      return value;
    });

    return strings.reduce((sentence, string, idx) => {
      console.log(
        'sentence =>',
        sentence,
        ', string =>',
        string,
        ', index =>',
        idx,
        ', abbr =>',
        abbreviated[idx],
      );
      return `${sentence}${string}${abbreviated[idx] || ''}`;
    }, '');
  }

  const sentence = addAbbr`${first} ${last} is very good at ${'HTML'}, ${'CSS'} and ${'JS'}.`;

  const app = document.querySelector('#app');
  const p = document.createElement('p');
  p.innerHTML = sentence;
  app.appendChild(p);
};
