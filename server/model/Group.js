const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema
const GroupSchema = new Schema({
  groupName: {
    type: String,
    required: true
  },
  enable: {
    type: Boolean,
    required: true,
    default: false
  },
  hints: {
    type: Number,
    retuired: true,
    default: 20,
  },
  usedHints: {
    type: Number,
    default: 0,
    retuired: true
  },
  currentQRCode: {
    type: String,
    required: false
  },
  answerdQuestions: [],
  currentQuestion: {
    type: String,
    required: false
  },
  QRCodes: []
});

module.exports = Group = mongoose.model('groups', GroupSchema);