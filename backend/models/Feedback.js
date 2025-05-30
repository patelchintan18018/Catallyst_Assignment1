const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, enum: ['Work Environment', 'Leadership', 'Growth', 'Others'], required: true },
  reviewed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
