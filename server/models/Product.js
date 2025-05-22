const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  status: {
    type: String,
    enum: ['Created Locally', 'Synced to WooCommerce', 'Sync Failed'],
    default: 'Created Locally'
  }
});

module.exports = mongoose.model('Product', productSchema);
