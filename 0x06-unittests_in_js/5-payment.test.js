// Import the necessary modules
const mocha = require('mocha'); // Mocha for structuring the test suite
const { expect } = require('chai'); // Chai's expect assertion library
const sinon = require('sinon'); // Sinon for creating spies, stubs, and mocks

// Import the function to be tested
const sendPaymentRequestToApi = require('./5-payment');

// Describe block for testing sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  let spy; // Declare a variable to hold the spy for console.log

  // beforeEach hook to set up a spy on console.log before each test
  beforeEach(() => {
    spy = sinon.spy(console, 'log'); // Spy on console.log
  });

  // afterEach hook to restore console.log after each test
  afterEach(() => {
    spy.restore(); // Restore console.log to its original state
  });

  // Test case: Ensures that sendPaymentRequestToApi(100, 20) logs the correct value
  it('should log 120 if a = 100 and b = 20', () => {
    sendPaymentRequestToApi(100, 20); // Call the function with values 100 and 20
    // Assert that console.log was called exactly once with the correct output
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true; // Ensure it's only called once
  });

  // Test case: Ensures that sendPaymentRequestToApi(10, 10) logs the correct value
  it('should log 20 if a = 10 and b = 10', () => {
    sendPaymentRequestToApi(10, 10); // Call the function with values 10 and 10
    // Assert that console.log was called exactly once with the correct output
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true; // Ensure it's only called once
  });
});
