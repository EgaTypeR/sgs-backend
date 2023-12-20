const productController = require('../controller/productController')
const express = require('express')
const router = express.Router()

router.get('/', productController.getProduct)
router.get('/:id', productController.getProductbyId)
router.get('/search', productController.searchProduct)
router.post('/',productController.addProduct)
router.patch('/:id', productController.editProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
