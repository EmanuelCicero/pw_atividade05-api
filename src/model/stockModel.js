const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid')

const StockSchema = new Schema({
  id: {
    type: String,
    default: uuidv4
  },
  name: {
    type: String,
    required:true,
    unique:true
  },
  category: {
    type: String,
    required:true
  },
  quantify: {
    type: Number,
    required:true
  },
  expirationDate: {
    type: Date,
    required:true
  },
  price: {
    type: Number,
    required:true
  }
});

const Stock = mongoose.model("Stock", StockSchema);
module.exports = Stock;
