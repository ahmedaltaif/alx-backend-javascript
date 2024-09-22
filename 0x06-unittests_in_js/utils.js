const Utils = {
  // Function to check if a number is -0 (negative zero)
  isNegZero(n) {
    const num = Number(n); // Convert the input to a number
    // Check if the number is 0 and that its reciprocal is -Infinity (which means it's -0)
    return num === 0 && 1 / num === -Infinity;
  },
  
  // Function to perform arithmetic operations based on the 'type' provided
  calculateNumber(type, a, b = 0) {
    let aNum = Number(a); // Convert the first argument to a number
    let bNum = Number(b); // Convert the second argument to a number (default is 0 if not provided)
  
    // Check if either argument is NaN (not a valid number) and throw an error if so
    if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
      throw TypeError('Parameters must be numbers or able to coerce to number');
    }
  
    // Round both numbers to the nearest integer
    aNum = Math.round(aNum);
    bNum = Math.round(bNum);
  
    let quotient;
  
    // Perform operations based on the 'type' argument
    switch (type) {
      case 'SUM':
        // Return the sum of the two rounded numbers
        return aNum + bNum;
      case 'SUBTRACT':
        // Return the difference of the two rounded numbers
        return aNum - bNum;
      case 'DIVIDE':
        // Check for division by zero, return 'ERROR' if bNum is 0
        if (bNum === 0) return 'ERROR';
        quotient = aNum / bNum; // Perform division
        // Check if the result is negative zero and return 0 instead if true
        return this.isNegZero(quotient) ? 0 : quotient;
      default:
        // Throw an error if an invalid operation type is provided
        throw Error(
          'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
        );
    }
  }
};

module.exports = Utils;
  