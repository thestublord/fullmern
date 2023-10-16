const express = require("express");
const router = express.Router();

// Import the Answer model
const answerDB = require("../models/AnswerModel");

// POST route to answer a question
router.post("/", async (req, res) => {
  try {
    // Save the answer to the database
    await answerDB
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Answer added successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: false,
          message: "Error adding answer",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while adding answer",
    });
  }
});

// Export the router
module.exports = router;
