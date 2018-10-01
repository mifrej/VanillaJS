document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// VanillaJS - write a "sum" function which can take one or two arguments

const sum = (num1, num2) => {
  return num2 ? num1 + num2 : num2 => num1 + num2;
};

console.log(sum);
