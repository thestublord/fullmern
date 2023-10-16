// Import required modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Function to connect to MongoDB
module.exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB started");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB", error);
    });
};
