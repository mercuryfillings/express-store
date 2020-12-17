const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema(
  {
//need schema
  },
  { timestamps: true }
)

module.exports = mongoose.model('products', Product)