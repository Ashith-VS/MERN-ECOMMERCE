const { productDataModel } = require("../model/ProductModel");

const addProduct=async(req,res)=>{
try {
    // console.log(req.body)
    const { productName, productDescription, productPrice, discountPrice, productCount, productImage, category, productData } = req.body;
      const newProduct=new productDataModel({
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
    res.status(200).json({status: 200,message: 'Product added successfully'});
} catch (error) {
    console.error(error);
    res.status(500).json({message:error.message});
}
}

const allProductList=async(req,res)=>{
    try {
        const products=await productDataModel.find();
        console.log('products: ', products);
        res.status(200).json({status:200,products});
    } catch (error) {
        console.error(error)
        res.status(500).json({message:error.message});
    }
}

const singleProductList =async(req,res)=>{
try {
    const {id}=req.params
    const product=await productDataModel.findById(id);
    res.status(200).json({status:200,product})
} catch (error) {
    console.error(error)
    res.status(500).json({message:error.message});
}
}

module.exports={addProduct,allProductList,singleProductList};