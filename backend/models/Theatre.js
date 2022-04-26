const mongoose = require("mongoose");

const TheatreSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    seats: {
      type: Array,
      required: false,
      default: [["A", "10"],["B", "10"],["C", "10"],["D", "10"],["E", "10"],["F", "10"]]
    },
    seatsAvailable: {
      type: Number,
      required: true,
    },
    costPerMonth: {
      type: Number,
      required: true,
    }
  });
  
  // export model user with UserSchema
  module.exports = mongoose.model("theatre", TheatreSchema);