// Import the Utils module
const Utils = require('./utils');

// Function to send a payment request to the API
const sendPaymentRequestToApi = (amount, shippingFee) => {
  // Calculate the total cost by summing the amount and shipping fee
  const totalCost = Utils.calculateNumber('SUM', amount, shippingFee);
  
  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Export the function to be used in other modules
module.exports = sendPaymentRequestToApi;
