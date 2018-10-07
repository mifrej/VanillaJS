export default () => {
  // "Multiple returns" (using object and destructure it) from Functions
  function convertCurrency(amount) {
    return {
      USD: amount * 0.76,
      GPB: amount * 0.53,
      AUD: amount * 1.01,
      NEX: amount * 13.3,
    };
  }

  const {
    USD, GPB, AUD, NEX,
  } = convertCurrency(30);
  console.log(`Currencies -> ${USD}, ${GPB}, ${AUD}, ${NEX}`);

  // Default Named Arguments
  function tipCalc({ total = 100, tax = 0.21, tip = 0.15 } = {}) {
    return total + total * tax + total * tip;
  }
  const bill = tipCalc({ tip: 0.2, total: 200 });
  console.log(`bill -> ${bill}`);
};
