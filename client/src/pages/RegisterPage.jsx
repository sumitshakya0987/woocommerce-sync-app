import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '' }); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      console.error('Register error:', err);
      alert('Registration failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: 400 }}>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className="form-control my-2"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="btn btn-success w-100" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
