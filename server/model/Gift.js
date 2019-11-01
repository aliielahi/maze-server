const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema
const GiftSchema = new Schema({
  picture: {
    type: String,
    required: true
  },
  giftDetails: {
    type: String,
    required: true
  },
});

module.exports = Group = mongoose.model('groups', GroupSchema);