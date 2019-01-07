import Routine from './routine';

const mongoose = require('mongoose');

const variationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  routine: {type : mongoose.Schema.Types.ObjectId, ref : 'Routine', required: true},
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Variation', variationSchema);
