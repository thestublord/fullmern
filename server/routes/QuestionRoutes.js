const express = require("express");
const router = express.Router();

// Import our model
const questionDB = require("../models/QuestionModel");

// POST /api/questions ADD QUESTION
router.post("/", async (req, res) => {
  try {
    // Save question to DB
    await questionDB
      .create({
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Question added successfully",
        });
      })
      .catch((err) => {
        res.status(480).send({
          status: false,
          message: "Question could not be added",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while adding question",
    });
  }
});

// GET /api/questions GET ALL QUESTIONS
router.get("/", async (req, res) => {
  try {
    // Perform a MongoDB 'join' query to fetch all answers for questions based on the questionId Field
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers",
            localField: "_id", // Assuming the local field is _id
            foreignField: "questionId",
            as: "allAnswers",
          },
        },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(588).send({
          status: false,
          message: "Unable to get the questions",
        });
      });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Server error while getting questions",
    });
  }
});

module.exports = router;
