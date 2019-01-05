const mongoose = require('mongoose');

const routineSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Order', routineSchema);
