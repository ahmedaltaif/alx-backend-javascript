// Import the Express module to create an application
const express = require('express');

// Initialize an Express application
const app = express();

// Define the port where the server will listen for incoming requests
const PORT = 7865;

// Middleware to parse incoming JSON requests in POST requests
app.use(express.json());

// Define the root route handler for GET requests to '/'
app.get('/', (_req, res) => {
  // Respond with a welcome message when the root URL is accessed
  res.send('Welcome to the payment system');
});

// Define a route for GET requests to /cart/:id with a numeric ID
app.get('/cart/:id(\\d+)', (req, res) => {
  // Extract the cart ID from the request parameters
  const id = req.params.id;

  // Respond with a message that includes the cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Define a route for GET requests to /available_payments
app.get('/available_payments', (_req, res) => {
  // Respond with a JSON object containing available payment methods
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Define a route for POST requests to /login
app.post('/login', (req, res) => {
  let username = ''; // Initialize a variable to store the username

  // If the request body contains a userName field, assign it to the username variable
  if (req.body) {
    username = req.body.userName;
  }

  // Respond with a message welcoming the user by their username
  res.send(`Welcome ${username}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console once the server is running
  console.log(`API available on localhost port ${PORT}`);
});

// Export the Express app for testing or external use
module.exports = app;
