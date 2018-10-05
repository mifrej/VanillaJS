export default () => {
  function calculateBill(total, tax = 0.22, tip = 0.1) {
    return total + total * tax + total * tip;
  }
  // passing `undefined` for arguments we keep their default values
  const totalBill = calculateBill(100, undefined, undefined);
  console.log(totalBill);
};
