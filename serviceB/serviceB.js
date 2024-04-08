const express = require('express'); // Import the Express framework
const app = express(); // Create an Express application instance

// Define a route for handling GET requests to the root URL ('/')
app.get('/', async (req, res) => {
    res.send("GRAFANA APPLYCATION O11Y IS AWESOME !!!!"); // Send a response with the message "GRAFANA APPLICATION O11Y IS AWESOMME !!!!"
});

// Define the port to listen on, using the value of the PORT environment variable if it's set, otherwise default to port 5050
const port = parseInt(process.env.PORT || 5050);

// Start the Express server and make it listen on the specified port
app.listen(port, () => {
    console.log(`Service B listening on port ${port}`); // Log a message to indicate that the server is running
});

