export default () => {
  const template = `
    <style>
      .wrapper {
        border: dashed 2px black;
        padding: 4em;
        text-align: center;
      }
      .mainWrapper {
        background-color: red;
      }
      .secondaryWrapper {
        background-color: blue;
      }
      .tertiaryWrapper {
        background-color: yellow;
      }
      button.wrapper {
        padding: 1em;
        font-size: 6em;
      }
    </style>
    <div class="wrapper mainWrapper">
      <div class="wrapper secondaryWrapper">
        <div class="wrapper tertiaryWrapper">
          <button class="wrapper">Click Me!</button>
        </div>
      </div>
    </div>
  `;
  document.body.innerHTML = template;

  const items = document.querySelectorAll('.wrapper');
  console.log(items);

  // // bubbling phase of propagating event
  // for (let i = 0; i < items.length; i += 1) {
  //   items[i].addEventListener('click', e => console.log(e, items[i]), false);
  // }

  // catching phase of propagating event
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', e => console.log(e, items[i]), true);
  }
};
