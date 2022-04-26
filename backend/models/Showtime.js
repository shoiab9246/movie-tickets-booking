const mongoose = require('mongoose');

const ShowtimeSchema = mongoose.Schema({
  startAt: {
    type: String,
    required: true,
    trim: true,
  },
  startDay: {
    type: Number,
    required: true,
  },
  startMonth: {
    type: Number,
    required: true,
  },
  startYear: {
    type: Number,
    required: true,
  },
  endDay: {
    type: Number,
    required: true,
  },
  endMonth: {
    type: Number,
    required: true,
  },
  endYear: {
    type: Number,
    required: true,
  },
  movieTitle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  theatreName: {
    type: String,
    required: true
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  seatsTaken: {
    type: Array,
    required: true,
  },
  percent: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("showtime", ShowtimeSchema);