// Import dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize variables
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./db");
const router = require("./routes");

// Middleware configuration
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// CORS configuration
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());

// Route configuration
app.use("/api", router);

// Connect to the database
db.connect();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
