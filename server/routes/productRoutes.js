const express = require('express');
const auth = require('../middleware/authMiddleware');
const { createProduct, getMyProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/', auth, createProduct);
router.get('/my', auth, getMyProducts);

module.exports = router;
