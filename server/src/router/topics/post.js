import Topic from '../../models/topic';

import Routine from '../../models/routine';

const mongoose = require('mongoose');

export default (req, res) => {
  const { title, description, routineIds } = req.body;

  if (!title || !description || !routineIds) {
    return res.json({
      success: false,
      error: 'You must provide an name, a description and a list with one or more of routine IDs',
    });
  }

  Routine.find({ _id: { $in: routineIds } }, (err, docs) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (docs) {
      const topic = new Topic({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        description: description,
        routines: docs,
      });
      topic.save((error) => {
        if (error) {
          return res.status(500).json({ success: false, error: error });
        }
        return res.status(201).json({ success: true, saved_topic: topic });
      });
    } else {
      return res.status(404).json({ success: false, message: 'Found 0 routines with given id list.' });
    }
  });
};
