const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  
  // Test for two integers
  describe('Two Integers', function () {
    it('should return 4 for (1, 3)', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  // Test for rounding a single float
  describe('Rounding One Number', function () {
    it('should return 5 when rounding 3.7 to 4 and adding to 1', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    
    it('should return 5 when rounding 3.7 and adding to 1', function () {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });

  // Test for rounding down
  describe('Rounding Down (floor)', function () {
    it('should return 4 for (1, 3.3)', function () {
      assert.strictEqual(calculateNumber(1, 3.3), 4);
    });
    
    it('should return 4 for (3.3, 1)', function () {
      assert.strictEqual(calculateNumber(3.3, 1), 4);
    });
  });

  // Test for rounding both numbers
  describe('Rounding Both Numbers', function () {
    it('should return 5 when rounding both (1.2, 3.7)', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    
    it('should return 6 when rounding both (1.5, 3.7)', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 5 for (3.7, 1.2)', function () {
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });

    it('should return 3 for rounding both numbers down (1.2, 2.1)', function () {
      assert.strictEqual(calculateNumber(1.2, 2.1), 3);
    });
  });

  // Additional edge cases (optional to consider)
  describe('Edge Cases', function () {
    it('should return 0 for (0.4, 0.4)', function () {
      assert.strictEqual(calculateNumber(0.4, 0.4), 0);  // Rounds both to 0
    });

    it('should return -1 for (-0.5, -0.5)', function () {
      assert.strictEqual(calculateNumber(-0.5, -0.5), -1);  // Rounds both to -1
    });
    
    it('should return 10000000002 for (10000000000, 1.6)', function () {
      assert.strictEqual(calculateNumber(10000000000, 1.6), 10000000002);  // Large numbers handling
    });
  });
});
