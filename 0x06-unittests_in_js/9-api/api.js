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

// Define a route that accepts a cart ID as a route parameter
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id; // Extract the cart ID from the URL
  
  // Respond with a message containing the cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing or external use
module.exports = app;
