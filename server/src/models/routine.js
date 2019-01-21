import Variation from './variation';

const mongoose = require('mongoose');

const routineSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  variations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Variation' }],
});

module.exports = mongoose.model('Routine', routineSchema);
