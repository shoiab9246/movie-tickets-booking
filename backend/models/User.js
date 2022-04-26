const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    // possible values: user, admin
    type: String,
    required: true
  },
  birthmonth: {
    type: String,
    required: false
  },
  birthday: {
    type: String,
    required: false
  },
  genres: {
    type: Array,
    required: false
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  creditcardnumber: {
    type: String,
    required: false
  },
  expirationmonth: {
    type: String,
    required: false
  },
  expirationyear: {
    type: String,
    required: false
  },
  zip: {
    type: String,
    required: false
  },
  points: {
    type: Number,
    required: false
  },
  balance: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);