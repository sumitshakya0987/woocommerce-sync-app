import { useEffect, useState } from 'react';
import { getMyProducts } from '../services/productService';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getMyProducts()
      .then(setProducts)
      .catch((err) => {
        alert('Error loading products');
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>{product.description}</p>
                <p><strong>₹{product.price}</strong></p>
                <span className={`badge ${product.status === 'Synced' ? 'bg-success' : 'bg-warning'}`}>
                  {product.status || 'Created Locally'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
