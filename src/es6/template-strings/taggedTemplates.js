export default () => {
  function highlight(strings, ...values) {
    return strings
      .map((textPart, idx) => `${textPart} <span class="hl">${values[idx] || ''}</span>`)
      .join('');
  }
  const name = 'Norton';
  const age = 15;
  const sentence = highlight`My dog's name was ${name} and he was ${age} years old.`;
  document.querySelector('#app').innerHTML = sentence;
};
