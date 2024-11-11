const User = require('../models/User.js');
const authUtils = require('../utils/authUtils.js');

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await authUtils.hashPassword(password);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        
        const token = authUtils.generateToken(user._id);
        
        res.status(201).json({ token, user: { id: user._id, username, email } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user || !(await authUtils.comparePassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = authUtils.generateToken(user._id);
        
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};