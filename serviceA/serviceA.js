const express = require('express'); // Import the Express framework
const app = express(); // Create an Express application instance
const axios = require("axios"); // Import the axios library for making HTTP requests

// Define a route for handling GET requests to the root URL ('/')
app.get('/', async (req, res) => {
    // Send a GET request to Service B
    let response = await axios.get("http://localhost:5050");

    // Send a response to the client, combining the response data from Service B with a custom message
    res.send("Service B says: " + response.data);
});

// Define the port to listen on, using the value of the PORT environment variable if it's set, otherwise default to port 8080
const port = parseInt(process.env.PORT) || 8080;

// Start the Express server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Service A listening on port ${port}`); // Log a message to indicate that the server is running
});

