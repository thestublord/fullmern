// Import required modules
const express = require("express");
const router = express.Router();

// Import route modules
const questionRoutes = require("./QuestionRoutes");
const answerRoutes = require("./AnswerRoutes");

// Test route
router.get("/", (req, res) => {
  res.send("Welcome to Kysymys");
});

// Use the question and answer routes
router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);

// Export the router
module.exports = router;
