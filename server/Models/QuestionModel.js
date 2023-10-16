const mongoose = require("mongoose");

// Define the QuestionSchema
const QuestionSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  user: {
    type: Object,
  },
});

// Export the schema as a model
module.exports = mongoose.model("Questions", QuestionSchema);
