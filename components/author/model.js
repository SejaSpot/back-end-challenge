const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Author', schema);