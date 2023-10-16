const mongoose = require("mongoose");

// Define the AnswerSchema
const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions", // Note that this should match the model name you've used for questions
  },
  createdAt: {
    type: Date,
    default: Date.now, // Moved the default value here
  },
  user: {
    type: Object,
  },
});

// Export the schema as a model
module.exports = mongoose.model("Answers", AnswerSchema);
