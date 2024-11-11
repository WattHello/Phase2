const express = require('express');
const { getUserProfile, trackProgress } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getUserProfile);
router.post('/progress', authMiddleware, trackProgress);

module.exports = router;