import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 ">
      <Link className="navbar-brand" to="/">WooCommerceApp</Link>

      <button 
        className="navbar-toggler" 
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/create-product" onClick={toggleNavbar}>Create Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" onClick={toggleNavbar}>Show Products</Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-sm btn-danger ms-2">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={toggleNavbar}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register" onClick={toggleNavbar}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
