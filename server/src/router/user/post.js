import User from '../../models/user';

const mongoose = require('mongoose');

export default (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an email and a password',
    });
  }

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email,
    password,
  });

  return user.save((error) => {
    if (error) return res.status(500).json({ success: false, error });
    return res.status(201).json({ success: true, user });
  });
};
