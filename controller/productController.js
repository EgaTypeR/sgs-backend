const mongoose = require('mongoose')
const productModel = require('../model/productModel')

exports.getProduct = async(req, res, next) =>{
  try{
    const Product = await productModel.find()
    if(!Product || Product.length === 0){
      return res.status(404).json({
        message: 'No Product Found'
      })
    }
    return res.status(200).json(Product)
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
      message: 'Server Error!'
    })
  }
}
exports.getProductbyId = async(req, res, next) =>{
  const {id} = req.params
  try{
    const Product = await productModel.findById(id)
    if(!Product || Product.length === 0){
      return res.status(404).json({
        message: 'No Product Found'
      })
    }
    return res.status(200).json(Product)
  }
  catch (error){
    console.log('get product by id',error)
    return res.status(500).json({
      message: 'Server Error!'
    })
  }
}
exports.searchProduct = async(req, res, next) =>{
  const query = req.query.q
  try{
    const Product = await productModel.find({ productName: { $regex: query, $options: 'i' } })
    if(!Product || Product.length === 0){
      return res.status(404).json({
        message: 'No Product Found'
      })
    }
    return res.status(200).json(Product)
  }
  catch(error){
    console.log('searching',error)
    res.status(500).json({message: 'Server Error!'})
  }
}
exports.addProduct = async (req, res, next) => {
  const productToAdd = req.body;

  try {
    if (!productToAdd || Object.keys(productToAdd).length === 0) {
      return res.status(400).json({ message: 'Bad Request, Request Body is Empty' });
    }

    const newProduct = new productModel(productToAdd);
    const savedProduct = await newProduct.save();

    return res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    next(error);
  }
}
exports.editProduct = async(req, res, next) =>{
  const productToEdit = req.body
  const {id} = req.params
  try{
    if(!mongoose.isValidObjectId(id)){
      return res.status(404).json({
        message:'No such Mission' + id
      })
    }

    Product = await productModel.find(id)
    if(!Product){
      return res.status(404).json({
        message: 'Product not Found'
      })
    }

    if (!productToEdit || Object.keys(productToEdit).length === 0) {
      return res.status(400).json({ message: 'Bad Request, Request Body is Empty' });
    }

    if(productToEdit.productName){
      Product.productName = productToEdit.productName
    }
    if(productToEdit.barCode){
      Product.barCode = productToEdit.barCode
    }
    if(productToEdit.category){
      Product.category = productToEdit.category
    }
    if(productToEdit.price){
      Product.price = productToEdit.price
    }
    
    const editedProduct = await Product.save()
    return res.status(200).json(editedProduct)

  }
  catch(error){
    return res.status(500).json(error)
  }
}
exports.deleteProduct = async(req, res, next) =>{
  const {id} = req.params
  try{
    if(!mongoose.isValidObjectId(id)){
      return res.status(404).json({
        message:'No such Mission' + id
      })
    }

    Product = await productModel.findByIdAndDelete(id)
    if(!Product){
      return res.status(404).json({
        message: 'Product not Found'
      })
    }
    return res.status(200).json(Product)
  }
  catch(error){
    return res.status(500).json(error)
  }
}