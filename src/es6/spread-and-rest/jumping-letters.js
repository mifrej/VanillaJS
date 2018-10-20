export default () => {
  const html = `
    <style>
    body {
      min-height: 100vh;
      font-family: sans-serif;
      background: #ffc600;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      color:white;
      text-shadow: 3px 3px 0 rgba(0,0,0,0.2);
    }
    .jump span {
      position: relative;
      display: inline-block;
      transition: transform 0.1s;
      cursor:url('http://csscursor.info/source/santahand.png'), default;
    }
    .jump span:hover {
      transform:translateY(-20px) scale(2) rotate(10deg);
      z-index: 1;
    }
    </style>
    <h2 class="jump">SPREAD!</h2>
  `;
  document.querySelector('#app').innerHTML = html;
  const header = document.querySelector('h2.jump').textContent;

  function jumpingLetters(htmlElement) {
    return [...htmlElement].map(letter => `<span>${letter}</span>`).join('');
  }

  document.querySelector('h2.jump').innerHTML = jumpingLetters(header);
};
