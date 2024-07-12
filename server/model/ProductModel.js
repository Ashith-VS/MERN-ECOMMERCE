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

const cartItemSchema= new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  wishListItems:[{
    id: {
      type: String,
      required: true,
    },
    productCount: {
      type: Number,
      required: true,
    },
    productColor: {
      type: String,
      required: true,
    },
    productSize: {
      type: String,
      required: true,
    },
    totalPrice:{
      type: Number,
      required: true,
    }
  }]
})
// Create a model from the schema
const productDataModel= mongoose.model('Product', ProductSchema)
const  CartItemModel= mongoose.model('cartItem', cartItemSchema)

module.exports ={productDataModel,CartItemModel}
