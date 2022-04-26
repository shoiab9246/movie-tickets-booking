const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  show: {
    type: String,
    required: true,
    trim: true,
  },
  theatreId: {
    type: String,
    required: true
  },
  movieId: {
    type: String,
    required: true
  },
  theatreName: {
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
    required: "",
  },
  amount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  checkin: {
    type: Boolean,
    default: false,
  },
  redeem:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("reservation", ReservationSchema);