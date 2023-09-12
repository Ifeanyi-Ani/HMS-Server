const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Ward', wardSchema);
