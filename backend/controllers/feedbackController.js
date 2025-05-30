const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFeedbackByCategory = async (req, res) => {
  try {
    const feedback = await Feedback.find({ category: req.params.category });
    res.status(200).json(feedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.markAsReviewed = async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, { reviewed: true }, { new: true });
    res.status(200).json(feedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
