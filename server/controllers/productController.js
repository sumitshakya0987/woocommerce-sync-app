const Product = require('../models/Product');
const WooCommerce = require('../services/wooService');
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

   const data={
    name:product.name,
    description:product.description,
    type: "simple",
    price:String(product.price),
    images:[
     {
       src:product.imageUrl
    }
    ]
   }

    try {
      WooCommerce.post("products", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
 

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

exports.getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user });
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message || err);
    res.status(500).json({ message: 'Error fetching products' });
  }
};
