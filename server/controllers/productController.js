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
      console.error('WooCommerce sync failed:', err.response?.data || err.message || err);
      product.status = 'Sync Failed';
    }

    await product.save();
    res.json(product);
  } catch (err) {
    console.error('Error creating product:', err.message || err);
    res.status(500).json({ message: 'Error creating product' });
  }
};
