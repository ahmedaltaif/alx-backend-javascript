// Import the Chai assertion library
const { expect } = require('chai');

// Describe block for grouping the number tests
describe('Testing numbers', () => {

  // Test case: Ensures that 1 is equal to 1
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  // Test case: Ensures that 2 is equal to 2
  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  // Test case: Skipped test that would fail (1 is not equal to 3)
  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  // Test case: Ensures that 3 is equal to 3
  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  // Test case: Ensures that 4 is equal to 4
  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  // Test case: Ensures that 5 is equal to 5
  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  // Test case: Ensures that 6 is equal to 6
  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  // Test case: Ensures that 7 is equal to 7
  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });

});
