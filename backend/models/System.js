const mongoose = require("mongoose");

const SystemSchema = mongoose.Schema({
    pointsperticket: {
      type: Number,
      required: true,
      default: 125
    },
    pointsforreward: {
        type: Number,
        required: true,
        default: 500
    },
    rewardvalue: {
      type: Number,
      required: true,
      default: 5
    }
  });
  
  module.exports = mongoose.model("system", SystemSchema);