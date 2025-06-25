const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ email, password: hashedPassword });
};

exports.authenticateUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) return null;
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return { user, token };
};
