import Routine from '../../models/routine';

const mongoose = require('mongoose');

export default (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.json({
      success: false,
      error: 'You must provide an name and a description',
    });
  }

  const routine = new Routine({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    description: description,
  });

  routine.save((err) => {
    if (err) return res.status(500).json({ success: false, error: err });
    return res.status(201).json({ success: true, routine: routine});
  });
};
