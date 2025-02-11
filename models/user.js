const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User; 