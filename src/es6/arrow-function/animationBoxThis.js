export default () => {
  document.getElementById('app').innerHTML = `
  <div class="wrap">
    <div class="box">
      <h2>Milosz</h2>
      <p class="social">@mifrej</p>
    </div>
  </div>
  `;
  const box = document.querySelector('.box');
  // regular function to rebound this to a clicked box
  box.addEventListener('click', function toggler() {
    console.log(this);
    let first = 'opening';
    let second = 'open';

    if (this.classList.contains(first)) {
      [first, second] = [second, first];
    }
    this.classList.toggle(first);
    // arrow function here to keep the this context from parent scope
    setTimeout(() => {
      this.classList.toggle(second);
    }, 500);
  });
};
