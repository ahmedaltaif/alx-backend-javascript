// Import the necessary modules
const sinon = require('sinon'); // Sinon for creating spies and stubs
const Utils = require('./utils'); // Import the Utils module
const { expect } = require('chai'); // Chai's expect assertion library
const sendPaymentRequestToApi = require('./4-payment'); // Function to be tested

// Describe block for testing sendPaymentRequestToApi
describe('sendPaymentRequestToApi', () => {
  // Test case: Ensures that console.log is called with the correct arguments
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    // Spy on console to monitor its log method
    const bigBrother = sinon.spy(console);

    // Stub the Utils.calculateNumber function to always return 10
    const dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10); // Force the function to return 10

    // Call the function with values 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Assertions:
    // Ensure Utils.calculateNumber was called with 'SUM', 100, and 20
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;

    // Ensure Utils.calculateNumber was called exactly once
    expect(dummy.callCount).to.be.equal(1);

    // Ensure console.log was called with the correct message
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;

    // Ensure console.log was called exactly once
    expect(bigBrother.log.callCount).to.be.equal(1);

    // Restore the original functions after the test
    dummy.restore();
    bigBrother.log.restore();
  });
});
