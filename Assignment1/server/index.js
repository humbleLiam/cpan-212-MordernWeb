const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Enable CORS for requests from the Vite frontend (port 3000)
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json()); // Middleware to parse JSON requests

// Sample data


// Endpoints


// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));