const express = require('express');
const { rateQuiz } = require('../controllers/ratingController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/rate', authMiddleware, rateQuiz);

module.exports = router;