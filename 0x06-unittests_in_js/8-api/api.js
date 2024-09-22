// Import the Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Define the port where the server will listen
const PORT = 7865;

// Define the root route handler for GET requests to '/'
app.get('/', (_, res) => {
  // Respond with a welcome message for the payment system
  res.send('Welcome to the payment system');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message indicating the API is available and listening
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing or external use
module.exports = app;
