const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    productName:{
      type: String,
      required: true
    },
    barCode:{
      type: String,
      rquired: false
    },
    category:[
      {
      type: String,
      required: false
      }
    ],
    price:{
      type: Number,
      required: false
    }
  },
  {timestamps: true}
)

module.exports = mongoose.model('products', productSchema)