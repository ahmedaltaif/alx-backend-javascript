// Import the Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Define the port where the server will listen
const PORT = 7865;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Root route for GET requests to '/'
app.get('/', (_req, res) => {
  // Respond with a welcome message for the payment system
  res.send('Welcome to the payment system');
});

// Route for GET requests to /cart/:id with a numeric id
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id; // Extract the cart ID from the URL

  // Respond with a message containing the cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Route for GET requests to /available_payments
app.get('/available_payments', (_req, res) => {
  // Respond with JSON containing available payment methods
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Route for POST requests to /login
app.post('/login', (req, res) => {
  let username = ''; // Initialize the username variable

  // Check if the request body exists and extract the userName field
  if (req.body) {
    username = req.body.userName;
  }

  // Respond with a welcome message for the user
  res.send(`Welcome ${username}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app for testing or external use
module.exports = app;
