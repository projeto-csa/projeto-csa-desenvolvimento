import Routine from './routine';

const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  routines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Routine' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
});

module.exports = mongoose.model('Topic', topicSchema);
