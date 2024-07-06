const mongoose = require('mongoose')

const VariantSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
    color: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });

const ProductSchema = new mongoose.Schema({
  productName: {
        type: String,
        required: true
    },
    productDescription: {
      type: String,
      required: true
  },
  productPrice: {
        type: Number,
        required: true
    },
    discountPrice:{
      type: Number,
      required: false,
      default: null,
    },
    category: {
        type: String,
        required: true
    },   
    productImage: {
      type: String,
      required: true,
    },
    productData:[VariantSchema]
})

const productDataModel= mongoose.model('Product', ProductSchema)
module.exports ={productDataModel}
