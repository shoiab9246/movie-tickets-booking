const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    rating: {
        type: Number,
        required: true,
      },
      feedback: {
        type: String,
        required: true,
      }
});

module.exports = mongoose.model("rating", RatingSchema);