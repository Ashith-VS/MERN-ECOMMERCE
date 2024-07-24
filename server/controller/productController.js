const mongoose = require('mongoose');
const { productDataModel, CartItemModel, wishlistModel, orderModel, } = require("../model/ProductModel");
const UserData = require('../model/User');

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

const updateProductCount = async (req, res) => {
    try {
        const { id } = req.params;
        const { product } = req.body;
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

        if (!updatedProduct) {
            return res.status(404).json({ status: 404, message: 'Product not found' });
        }
        res.status(200).json({ status: 200, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: error.message });
    }
};

const deleteProductData = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await productDataModel.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Server error" });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await UserData.find();
        res.status(200).json({ status: 200, users });
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { id } = req.body;
        console.log('id44: ', id);
        const userResult = await UserData.findByIdAndDelete(id)
        if (!userResult) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Server error" });
    }
}

const blockUser = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await UserData.findByIdAndUpdate(id, { blocked: true })
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User blocked successfully" });
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Server error" });
    }
}

const unblockUser = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await UserData.findByIdAndUpdate(id, { blocked: false })
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User unblocked successfully" });
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Server error" });
    }
}

const updatedProduct= async (req, res) => {
    try {
        const { id, productData } = req.body;
        console.log('productData: ', productData);
        console.log('id: ', id);
        const product = await productDataModel.findByIdAndUpdate(id, { productData: productData }, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully"});
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Server error" });
    }

}



module.exports = { addProduct, allProductList, singleProductList, addToCart, getCartItems, removeCartItems, addToWishlist, getWishlistItems, addToOrders, getOrders, updateProductCount, deleteProductData, getUsers, deleteUsers, blockUser,unblockUser,updatedProduct };