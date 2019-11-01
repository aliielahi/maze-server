const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema
const QuestionSchema = new Schema({
  questionName: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  questionAnswer: {
    type: String,
    required: true
  },
  questionNumber: {
    type: Number,
    required: true
  }
});

module.exports = Question = mongoose.model('questions', QuestionSchema);