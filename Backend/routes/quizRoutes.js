const express = require('express');
const { createQuiz, getQuizzes, updateQuiz, deleteQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createQuiz);
router.get('/', getQuizzes);
router.put('/:id', authMiddleware, updateQuiz);
router.delete('/:id', authMiddleware, deleteQuiz);

module.exports = router;