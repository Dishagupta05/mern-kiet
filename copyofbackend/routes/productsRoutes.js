const express = require("express");
const productsController = require('../controllers/productsController.js')
const productRouter = express.Router();

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct)

productRouter.route('/:_id')
.put(productsController.replaceProduct)

productRouter.route('/:_id')
.delete(productsController.deleteProduct)

module.exports = productRouter;
