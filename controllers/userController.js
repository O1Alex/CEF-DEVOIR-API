const userService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const result = await userService.authenticateUser(req.body);
  if (!result) return res.status(401).json({ message: 'Login invalide' });
  res.json({ token: result.token });
};
