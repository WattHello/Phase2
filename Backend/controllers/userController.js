const User = require('../models/User.js');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.findByIdAndUpdate(req.user._id, { username, email }, { new: true }).select('-password');
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getProgress = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('quizzesTaken', 'quizId score date');
        res.json(user.quizzesTaken);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};