// Import necessary modules
const mocha = require('mocha'); // Mocha for testing framework
const { expect } = require('chai'); // Chai for assertions
const sinon = require('sinon'); // Sinon for spying, stubbing, and mocking (not used here, but imported for potential future use)

// Import the function to be tested
const getPaymentTokenFromAPI = require('./6-payment_token');

// Describe block for testing getPaymentTokenFromAPI
describe('getPaymentTokenFromAPI', () => {
  // Test case: Ensures that the promise resolves correctly when success is true
  it('should resolve promise if success is true', (done) => {
    // Call the function with true and handle the promise
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // Assert that the resolved value is as expected
        expect(res).to.eql({ data: 'Successful response from the API' });
        done(); // Call done to signal that the test has completed successfully
      })
      .catch((err) => {
        done(err); // If there’s an error, pass it to done to fail the test
      });
  });
});
