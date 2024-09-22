// Importing the 'utils' module
const utils = require('./utils');

// Function to send a payment request to the API
module.exports = function sendPaymentRequestToApi(amount, shippingCost) {
  // Calculate the total cost by summing the amount and shipping cost using utils.calculateNumber
  const totalCost = utils.calculateNumber('SUM', amount, shippingCost);
  
  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
  
  // Return the calculated total cost
  return totalCost;
};
