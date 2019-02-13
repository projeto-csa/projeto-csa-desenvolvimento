import Variation from '../../models/variation';

import Routine from '../../models/routine';

const mongoose = require('mongoose');

export default (req, res) => {
  const { name, description, routineId } = req.body;

  if (!name || !description || !routineId) {
    return res.json({
      success: false,
      error: 'You must provide an name, a description and the routine ID',
    });
  }

  Routine.findById(routineId, (err, routine) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (routine) {
      const variation = new Variation({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        description: description,
        routine: routine._id,
      });

      variation.save((error) => {
        if (err) {
          return res.status(500).json({ success: false, error: error });
        }

        routine.variations.push(variation._id);

        routine.save((error2) => {
          if (error2) {
            return res.status(500).json({ success: false, error: error2 });
          }
          return res.status(201).json({ success: true, saved_variation: variation });
        });
      });
    } else {
      return res.status(404).json({ success: true, error: 'Routine not Found' });
    }
  });
};
