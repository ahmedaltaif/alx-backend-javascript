// Import the 'expect' function from Chai for assertions
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

// Test for SUM operation
describe('#calculateNumber() with type SUM', () => {
  it('add 5 and 10', () => {
    expect(calculateNumber('SUM', 5, 10)).to.equal(15);  // 5 + 10 = 15
  });
  it('add 1.0 and 4.0', () => {
    expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);  // 1.0 + 4.0 = 5
  });
  it('add 2 and 2.7', () => {
    expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);  // 2 + 2.7 (rounded to 3) = 5
  });
  it('add 1.7 and 3.5', () => {
    expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);  // 1.7 (rounds to 2) + 3.5 (rounds to 4) = 6
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);  // Both round to 0, so 0 + 0 = 0
  });
  it('add -0.7 and 0.7', () => {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);  // -0.7 rounds to -1, 0.7 rounds to 1, -1 + 1 = 0
  });
  it('add -0.8 and -0.7', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);  // Both round to -1, -1 + -1 = -2
  });
});

// Test for SUBTRACT operation
describe('#calculateNumber() with type SUBTRACT', () => {
  it('subtract 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);  // 1 - 3 = -2
  });
  it('subtract 1.0 and 4.0', () => {
    expect(calculateNumber('SUBTRACT', 1.0, 4.0)).to.equal(-3);  // 1.0 - 4.0 = -3
  });
  it('subtract 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);  // 1.4 rounds to 1, 4.5 rounds to 5, 1 - 5 = -4
  });
  it('subtract 1.2 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);  // 1.2 rounds to 1, 3.7 rounds to 4, 1 - 4 = -3
  });
  it('subtract 1.5 and 3.7', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);  // 1.5 rounds to 2, 3.7 rounds to 4, 2 - 4 = -2
  });
  it('subtract 0.1 and 0.3', () => {
    expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);  // Both round to 0, so 0 - 0 = 0
  });
  it('subtract -0.7 and 0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);  // -0.7 rounds to -1, 0.7 rounds to 1, -1 - 1 = -2
  });
  it('subtract -0.8 and -0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);  // Both round to -1, -1 - (-1) = 0
  });
  it('subtract 0.8 and -0.4', () => {
    expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);  // 0.8 rounds to 1, -0.4 rounds to 0, 1 - 0 = 1
  });
});

// Test for DIVIDE operation
describe('#calculateNumber() with type DIVIDE', () => {
  it('divide 1 and 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);  // 1 / 4 = 0.25
  });
  it('divide 1.0 and 4.0', () => {
    expect(calculateNumber('DIVIDE', 1.0, 4.0)).to.equal(0.25);  // 1.0 / 4.0 = 0.25
  });
  it('divide 1 and 3.7', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);  // 3.7 rounds to 4, so 1 / 4 = 0.25
  });
  it('divide 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);  // 1.4 rounds to 1, 4.5 rounds to 5, 1 / 5 = 0.2
  });
  it('divide 1.6 and 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);  // 1.6 rounds to 2, 2.4 rounds to 2, 2 / 2 = 1
  });
  it('divide 4.2 and 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);  // 4.2 rounds to 4, 1.5 rounds to 2, 4 / 2 = 2
  });
  it("divide 1.3 and 0.3", () => {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');  // 0.3 rounds to 0, division by 0 returns 'Error'
  });
  it('divide -0.7 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);  // -0.7 rounds to -1, 0.7 rounds to 1, -1 / 1 = -1
  });
  it('divide -0.8 and -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);  // Both round to -1, so -1 / -1 = 1
  });
  it('divide -44.5 and 2.4', () => {
    expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);  // -44.5 rounds to -45, 2.4 rounds to 2, -45 / 2 = -22
  });
  it('divide -88.5 and -3.6', () => {
    expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);  // -88.5 rounds to -89, -3.6 rounds to -4, -89 / -4 = 22
  });
});
