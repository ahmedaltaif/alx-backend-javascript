// Import the calculateNumber function from the 0-calcul.js file
const calculateNumber = require("./0-calcul.js");
// Import the assert module for testing
const assert = require('assert');

// Start the test suite for calculateNumber
describe('calculateNumber', () => {

    // Test case for rounding of the first parameter (a)
    it('rounding of a', () => {
        // Test that 15.78 rounds to 16 and 16 + 2 = 18
        assert.equal(calculateNumber(15.78, 2), 18);
        // Test that 1.2 rounds to 1 and 1 + 0 = 1
        assert.equal(calculateNumber(1.2, 0), 1);
        // Test that 3.5 rounds to 4 and 4 + 2 = 6
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    // Test case for rounding of the second parameter (b)
    it('rounding of b', () => {
        // Test that 15.78 rounds to 16 and 2 + 16 = 18
        assert.equal(calculateNumber(2, 15.78), 18);
        // Test that 1.2 rounds to 1 and 0 + 1 = 1
        assert.equal(calculateNumber(0, 1.2), 1);
        // Test that 3.5 rounds to 4 and 2 + 4 = 6
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    // Test case for rounding and summing of both parameters (a and b)
    it('summing of a and b', () => {
        // Test that 15.78 rounds to 16, 2.5 rounds to 3, and 16 + 3 = 19
        assert.equal(calculateNumber(15.78, 2.5), 19);
        // Test that 1.2 rounds to 1, 0.2 rounds to 0, and 1 + 0 = 1
        assert.equal(calculateNumber(1.2, 0.2), 1);
        // Test that 3.5 rounds to 4, 2.7 rounds to 3, and 4 + 3 = 7
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });
});
