// Function to round two numbers and return their sum
function calculateNumber(num1, num2) {
    // Rounding both input numbers to the nearest integer and returning their sum
    return Math.round(num1) + Math.round(num2);
}

// Exporting the calculateNumber function for use in other modules
module.exports = calculateNumber;
