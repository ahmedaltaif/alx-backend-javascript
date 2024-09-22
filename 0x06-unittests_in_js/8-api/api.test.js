// Import the request module for making HTTP requests
const request = require('request');

// Import Chai for assertions
const { expect } = require('chai');

// Describe block for API integration tests
describe('API integration test', () => {
  // Define the base URL for the API
  const API_URL = 'http://localhost:7865';

  // Test case: Ensure that GET / returns the correct response
  it('GET / returns correct response', (done) => {
    // Make a GET request to the root endpoint of the API
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Assert that the response status code is 200 (OK)
      expect(res.statusCode).to.be.equal(200);
      
      // Assert that the response body contains the correct message
      expect(body).to.be.equal('Welcome to the payment system');
      
      // Call done to signal the end of the test
      done();
    });
  });
});
