const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema
const QRSchema = new Schema({
  QRText: {
    type: String,
    required: true
  },
  pictureId: {
    type: String,
    required: true
  },
  qrNumber: {
    type: Number,
    required: true
  }
});

module.exports = QR = mongoose.model('qrs', QRSchema);