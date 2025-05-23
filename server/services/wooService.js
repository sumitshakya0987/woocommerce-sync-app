
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;



try {

  const  WooCommerce = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL,
  consumerKey:  process.env.WOOCOMMERCE_KEY, 
  consumerSecret:process.env.WOOCOMMERCE_SECRET , 
  version: 'wc/v3' ,
  timeout:100000
});

module.exports=WooCommerce;
  

} catch (error) {
  console.log("Error",error)
  
}



