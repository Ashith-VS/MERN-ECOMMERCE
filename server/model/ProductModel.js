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
  discountPrice: {
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
  productData: [VariantSchema]
})

const cartItemSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cartItems: [{
    id: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true
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
    totalPrice: {
      type: Number,
      required: true,
    }
  }]
})

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  wishlistItems: [{
    id: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true
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
      required: true
    },
    totalPrice: {
      type: Number,
      required: true,
    }
  }]
})

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  orderItems: [{
    id: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
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
      required: true
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    uid:{
      type: Number,
      required: true,
    }
  }],
  userData: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "credit card",
    },
    orderStatus: {
      type: String,
      default: 'pending',
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  },
  uid: {
    type: Number,
    required: true,
  }

})
// Create a model from the schema
const productDataModel = mongoose.model('Product', ProductSchema)
const CartItemModel = mongoose.model('cartItem', cartItemSchema)
const wishlistModel = mongoose.model('wishlist', wishlistSchema)
const orderModel = mongoose.model('order', orderSchema)

module.exports = { productDataModel, CartItemModel, wishlistModel, orderModel }
