const mongoose = require("mongoose");

module.exports = mongoose.model(
  'Post',
  mongoose.Schema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    date: {
      type: Date
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author'
    }
  })
);