import DOMPurify from 'dompurify';

export default () => {
  function sanitize(strings, ...values) {
    const dirty = strings.reduce(
      (sentence, string, idx) => `${sentence}${string}${values[idx] || ''}`,
      '',
    );
    return DOMPurify.sanitize(dirty);
  }

  const first = 'Milosz';
  const aboutMe = 'I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert(\'you got hacked\');" />';

  const html = sanitize`
    <div class="bio">
      <h3>${first}</h3>
      <p>${aboutMe}</p>
    </div>
  `;

  document.querySelector('#app').innerHTML = html;
};
