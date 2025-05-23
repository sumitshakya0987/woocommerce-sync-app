const axios = require('axios');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');

const apiUrl = `${process.env.WOOCOMMERCE_URL}/wp-json/wc/v3/products`;

const oauth = OAuth({
  consumer: {
    key: process.env.WOOCOMMERCE_KEY,
    secret: process.env.WOOCOMMERCE_SECRET
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

module.exports = async function syncWithWooCommerce(product) {
  const requestData = {
    url: apiUrl,
    method: 'POST',
    data: {
      name: product.name,
      type: 'simple',
      regular_price: product.price.toString(),
      description: product.description,
      images: product.imageUrl ? [{ src: product.imageUrl }] : []  // Optional image
    }
  };

  const headers = oauth.toHeader(oauth.authorize(requestData));

  try {
    const response = await axios.post(apiUrl, requestData.data, {
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    });

    console.log("✅ WooCommerce Sync Success:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("❌ WooCommerce Sync Error:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};
