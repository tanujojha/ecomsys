const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
      type: String
    }
  });

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
