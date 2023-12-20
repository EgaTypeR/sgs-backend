const mongoose = require('mongoose')
const productModel = require('../model/productModel')

exports.getProduct = async(req, res, next) =>{
  try{
    const Product = await productModel.find()
    if(!Product || Product.length() === 0){
      return res.status(404).json({
        message: 'No Product Found'
      })
    }
    return res.status(200).json(Product)
  }
  catch{
    return res.status(500).json({
      message: 'Server Error!'
    })
  }
}
exports.getProductbyId = async(req, res, next) =>{
  
}
exports.searchProduct = async(req, res, next) =>{
  
}
exports.addProduct = async(req, res, next) =>{
  
}
exports.editProduct = async(req, res, next) =>{
  
}
exports.deleteProduct = async(req, res, next) =>{
  
}