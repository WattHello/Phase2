const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

exports.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, 'secretKey', { expiresIn: '1h' });
};