const mongoose = require('mongoose');

// Define the shape of a bookmark document
const bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: 'general',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Bookmark model
module.exports = mongoose.model('Bookmark', bookmarkSchema);