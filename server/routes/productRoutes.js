const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/my-products', productController.getMyProducts);
router.post('/create', productController.createProduct);

module.exports = router;
