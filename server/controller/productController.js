const mongoose = require('mongoose');
const { productDataModel, CartItemModel, wishlistModel, orderModel, } = require("../model/ProductModel");

const addProduct = async (req, res) => {
    try {
        const { productName, productDescription, productPrice, discountPrice, productCount, productImage, category, productData } = req.body;
        const newProduct = new productDataModel({
            productName,
            productDescription,
            productPrice,
            discountPrice,
            productCount,
            productImage,
            category,
            productData
        })
        await newProduct.save();
        res.status(200).json({ status: 200, message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const allProductList = async (req, res) => {
    try {
        const products = await productDataModel.find();
        // console.log('products: ', products);
        res.status(200).json({ status: 200, products });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
}

const singleProductList = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productDataModel.findById(id);
        res.status(200).json({ status: 200, product })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
}
const addToCart = async (req, res) => {
    try {
        const { userId, item } = req.body;
        const existingCart = await CartItemModel.findOne({ userId });
        if (existingCart) {
            existingCart.cartItems = item
            await existingCart.save();
        } else {
            const cartItem = new CartItemModel({
                userId,
                cartItems: item
            });
            await cartItem.save();
        }
        res.status(200).json({ status: 200, message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getCartItems = async (req, res) => {
    try {
        const { id } = req.params
        const cartItems = await CartItemModel.findOne({ userId: id });
        if (!cartItems) {
            return res.status(404).json({ status: 404, message: 'Cart items not found' });
        }
        res.status(200).json({ status: 200, message: 'Get cart items successfully', data: cartItems })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const removeCartItems = async (req, res) => {
    try {
        const { userId, itemId } = req.body
        // Convert itemId to ObjectId
        const itemObjectId = new mongoose.Types.ObjectId(itemId);
        const cart = await CartItemModel.findOne({ userId });
        if (cart) {
            const updatedCartItems = cart.cartItems.filter(cartItem => {
                return !cartItem?._id.equals(itemObjectId)
            });
            cart.cartItems = updatedCartItems;
            await cart.save();
            res.status(200).json({ status: 200, message: "Product removed successfully" });
        } else {
            res.status(404).json({ status: 404, message: "Cart not found" });
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const addToWishlist = async (req, res) => {
    try {
        const { userId, item } = req.body
        let wishlist = await wishlistModel.findOne({ userId })
        if (wishlist) {
            wishlist.wishlistItems = item;
            await wishlist.save();
        } else {
            const wishlists = new wishlistModel({
                userId,
                wishlistItems: item
            });
            await wishlists.save();
        }
        res.status(200).json({ status: 200, message: 'product added to wishlist successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getWishlistItems = async (req, res) => {
    try {
        const { id } = req.params
        const wishlistItems = await wishlistModel.findOne({ userId: id });
        if (!wishlistItems) {
            return res.status(404).json({ status: 404, message: 'Wishlist items not found' });
        }
        res.status(200).json({ status: 200, message: 'Get wishlist items successfully', data: wishlistItems })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


const addToOrders = async (req, res) => {
    try {
        const { userId, item, formData, uid } = req.body;
        const newOrder = new orderModel({
            userId,
            orderItems: item,
            userData: formData,
            uid: uid
        });
        await newOrder.save();
        res.status(200).json({ status: 200, message: 'Order placed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const { id } = req.params
        const orders = await orderModel.find({ userId: id });
        res.status(200).json({ status: 200, orders });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { product } = req.body;
        // console.log('req.body: ', product);

        // Ensure id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: 400, message: 'Invalid ID format' });
        }

        // Update the document
        const updatedProduct = await productDataModel.findByIdAndUpdate(
            id,
            { $set: { productData: product } }, 
            { new: true, runValidators: true } 
        );
        // console.log('updatedProduct: ', updatedProduct);

        if (!updatedProduct) {
            return res.status(404).json({ status: 404, message: 'Product not found' });
        }
        res.status(200).json({ status: 200, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: error.message });
    }
};



module.exports = { addProduct, allProductList, singleProductList, addToCart, getCartItems, removeCartItems, addToWishlist, getWishlistItems, addToOrders, getOrders, updateProduct };