const Product = require('../models/Product');
const syncWithWooCommerce = require('../services/wooService');

exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const product = await Product.create({
      user: req.user,
      name,
      description,
      price,
      imageUrl
    });

    try {
      await syncWithWooCommerce(product);
      product.status = 'Synced to WooCommerce';
    } catch (err) {
      product.status = 'Sync Failed';
    }

    await product.save();
    res.json(product);
  } catch {
    res.status(500).json({ message: 'Error creating product' });
  }
};

exports.getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user });
    res.json(products);
  } catch {
    res.status(500).json({ message: 'Error fetching products' });
  }
};
