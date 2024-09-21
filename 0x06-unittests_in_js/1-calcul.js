function calculateNumber(operationType, num1, num2) {
    // Round both input numbers to the nearest integer
    const roundedNum1 = Math.round(num1);
    const roundedNum2 = Math.round(num2);
    
    // Check the type of operation and perform the appropriate calculation
    if (operationType === 'SUM') {
        // Return the sum of the rounded numbers
        return roundedNum1 + roundedNum2;
    }
    if (operationType === 'SUBTRACT') {
        // Return the difference between the rounded numbers
        return roundedNum1 - roundedNum2;
    }
    if (operationType === 'DIVIDE') {
        // Check if the second rounded number is zero to avoid division by zero
        if (roundedNum2 === 0) {
            // Return an error message if division by zero is attempted
            return 'Error';
        }
        // Return the result of dividing the first rounded number by the second
        return roundedNum1 / roundedNum2;
    }
}

module.exports = calculateNumber;
