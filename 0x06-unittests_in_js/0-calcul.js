// Exporting a function named calculateSum
module.exports = function calculateSum(value1, value2 = 0) {
  // Convert input values to numbers
  const num1 = Number(value1);
  const num2 = Number(value2);
  
  // Check if either of the converted values is NaN
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new TypeError('Parameters must be valid numbers');
  }
  
  // Return the sum of the rounded values of num1 and num2
  return Math.round(num1) + Math.round(num2);
};
  