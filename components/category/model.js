const mongoose = require("mongoose");

module.exports = mongoose.model(
  'Category',
  mongoose.Schema({
    name: {
      type: String
    },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }
    ]
  })
);