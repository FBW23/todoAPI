const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
