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

  // Test case: Ensure GET /cart/:id returns correct response for a valid :id
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Make a GET request to the /cart/47 endpoint
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      // Assert that the response status code is 200 (OK)
      expect(res.statusCode).to.be.equal(200);
      
      // Assert that the response body contains the correct message with the cart id
      expect(body).to.be.equal('Payment methods for cart 47');
      
      // Call done to signal the end of the test
      done();
    });
  });

  // Test case: Ensure GET /cart/:id returns 404 for negative number values in :id
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Make a GET request to the /cart/-47 endpoint
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      // Assert that the response status code is 404 (Not Found)
      expect(res.statusCode).to.be.equal(404);
      
      // Call done to signal the end of the test
      done();
    });
  });

  // Test case: Ensure GET /cart/:id returns 404 for non-numeric values in :id
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Make a GET request to the /cart/d200-44a5-9de6 endpoint
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      // Assert that the response status code is 404 (Not Found)
      expect(res.statusCode).to.be.equal(404);
      
      // Call done to signal the end of the test
      done();
    });
  });
});
