import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/productService';

function ProductFormPage() {
  const [form, setForm] = useState({ name: '', description: '', price: '', imageUrl: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(form);
      alert('Product created and syncing...');
      navigate('/products'); // Redirect to the products page
    } catch (err) {
      console.error(err);
      alert('Error creating product');
    }
  };

  return (
    <div className="card p-4 mx-auto mt-4" style={{ maxWidth: 600 }}>
      <h3 className="mb-3">Create Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          className="form-control my-2"
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control my-2"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="form-control my-2"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={e => setForm({ ...form, imageUrl: e.target.value })}
        />
        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default ProductFormPage;
