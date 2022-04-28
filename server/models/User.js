const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phonenumber:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    cart:{
      type: Array,
      default: []
    },
    wishlist:{
      type: Array,
      default: []
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

const User = mongoose.model("user", userSchema);

module.exports = User;
