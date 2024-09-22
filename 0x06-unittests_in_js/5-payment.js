// Importing the Utils module
const Utils = require('./utils');

// Function to send a payment request to the API
const sendPaymentRequestToApi = (amount, shippingCost) => {
  // Calculate the total cost by summing the amount and shipping cost using Utils.calculateNumber
  const totalCost = Utils.calculateNumber('SUM', amount, shippingCost);

  // Log the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Export the function to be used in other modules
module.exports = sendPaymentRequestToApi;
