// Function to simulate an API call, resolving a promise if success is true
module.exports = function getPaymentTokenFromAPI(isSuccess) {
    // Check if success is true and resolve the promise with the expected response
    if (isSuccess === true) {
      return Promise.resolve({ data: 'Successful response from the API' });
    }
    // If success is not true, no promise is returned
  };
  