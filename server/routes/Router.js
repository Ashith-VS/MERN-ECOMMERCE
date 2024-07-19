const express = require('express')
const { loginUser, registerUser, currentUser, googleLogin } = require('../controller/userController')
const verifyToken = require('../middleware/authMiddleware')
const { allProductList, addProduct, singleProductList, addToCart, getCartItems, removeCartItems, addToWishlist } = require('../controller/productController')

const router = express.Router()

router.post('/login', loginUser)
router.post("/register", registerUser)
router.post("/googlelogin", googleLogin)
router.get('/currentuser', verifyToken, currentUser)
router.post('/addProduct', addProduct)
router.get('/productlist', allProductList)
router.get('/productDetails/:id', singleProductList)
router.post('/addtoCart', addToCart)
router.get("/cart/:id", getCartItems)
router.post('/deletecart', removeCartItems)
router.post('/addwishlist', addToWishlist)

module.exports = router