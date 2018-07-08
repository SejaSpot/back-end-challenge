const mongoose = require("mongoose");

module.exports = mongoose.model(
  'Author',
  mongoose.Schema({
    name: {
      type: String
    },
    description: {
      type: String
    }
  })
);