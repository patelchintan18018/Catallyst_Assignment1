const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/', feedbackController.createFeedback);
router.get('/', feedbackController.getAllFeedback);
router.get('/category/:category', feedbackController.getFeedbackByCategory);
router.patch('/:id/reviewed', feedbackController.markAsReviewed);
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
