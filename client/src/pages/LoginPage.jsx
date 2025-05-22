import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      login(res.user);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: 400 }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
