// Import the Express module to create the app
const express = require('express');

// Initialize the Express application
const app = express();

// Define the port where the server will listen for incoming requests
const port = 7865;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Root route for GET requests to '/'
app.get('/', (request, response) => {
  // Respond with a welcome message
  response.send('Welcome to the payment system');
});

// Route for GET requests to /cart/:id with numeric id parameter
app.get('/cart/:id([0-9]+)', (request, response) => {
  // Extract the cart ID from the URL and respond with a message
  response.send(`Payment methods for cart ${request.params.id}`);
});

// Route for GET requests to /available_payments
app.get('/available_payments', (request, response) => {
  // Set response content type to JSON
  response.set("Content-Type", "application/json");

  // Define the available payment methods
  const payMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  
  // Send the payment methods as a JSON response
  response.send(payMethods);
});

// Route for POST requests to /login
app.post('/login', (request, response) => {
  // Extract the userName from the request body
  const userName = request.body.userName;
  
  // If userName is provided, respond with a welcome message
  if (userName) {
    response.send(`Welcome ${userName}`);
  } else {
    // If no userName is provided, return a 404 status
    response.status(404).send();
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Export the app for testing or external use
module.exports = app;
