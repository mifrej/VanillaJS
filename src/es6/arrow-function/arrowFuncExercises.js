export default () => {
  document.querySelector('#app').innerHTML = `
    <ul>
      <li data-time="5:17">Flexbox Video</li>
      <li data-time="8:22">Flexbox Video</li>
      <li data-time="3:34">Redux Video</li>
      <li data-time="5:23">Flexbox Video</li>
      <li data-time="7:12">Flexbox Video</li>
      <li data-time="7:24">Redux Video</li>
      <li data-time="6:46">Flexbox Video</li>
      <li data-time="4:45">Flexbox Video</li>
      <li data-time="4:40">Flexbox Video</li>
      <li data-time="7:58">Redux Video</li>
      <li data-time="11:51">Flexbox Video</li>
      <li data-time="9:13">Flexbox Video</li>
      <li data-time="5:50">Flexbox Video</li>
      <li data-time="5:52">Redux Video</li>
      <li data-time="5:49">Flexbox Video</li>
      <li data-time="8:57">Flexbox Video</li>
      <li data-time="11:29">Flexbox Video</li>
      <li data-time="3:07">Flexbox Video</li>
      <li data-time="5:59">Redux Video</li>
      <li data-time="3:31">Flexbox Video</li>
    </ul>
  `;

  // Select all the list items on the page and convert to array
  const videoListArray = Array.from(document.querySelectorAll('[data-time]'));
  console.log(videoListArray);
  // Filter for only the elements that contain the word 'Flexbox'
  const filtered = videoListArray
    .filter(element => element.innerText.toLowerCase().includes('flexbox'))
    // map down to a list of time strings
    .map(el => el.attributes['data-time'].value) // `el.dataset.time` also works
    // map to an array of seconds
    .map((el) => {
      const minutesSeconds = el.split(':').map(timePart => parseFloat(timePart));
      return minutesSeconds[0] * 60 + minutesSeconds[1];
    })
    // reduce to get total
    .reduce((acc, el) => acc + el, 0);
  console.log(filtered);

  // 🔥 This can also be done in a single .reduce(),
  // but we're practicing arrow functions here, so chain them!
};
