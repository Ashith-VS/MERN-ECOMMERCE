const express = require('express')
const { loginUser, registerUser, currentUser, googleLogin } = require('../controller/userController')
const verifyToken = require('../middleware/authMiddleware')
const {allProductList, addProduct, singleProductList} = require('../controller/productController')

const router=express.Router()

router.post('/login',loginUser)
router.post("/register",registerUser)
router.post("/googlelogin",googleLogin)
router.get('/currentuser',verifyToken,currentUser)
router.post('/addProduct',addProduct)
router.get('/productlist',allProductList)
router.get('/productDetails/:id',singleProductList)

 module.exports=router