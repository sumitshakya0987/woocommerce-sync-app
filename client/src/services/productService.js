import axios from 'axios';

const API = "https://woocommerce-sync-app.onrender.com/api";

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    return {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
  }
  return {}; 
};

export const createProduct = (data) =>
  axios.post(`${API}/products`, data, getAuthHeader());

export const getMyProducts = () =>
  axios.get(`${API}/products/my`, getAuthHeader()).then((res) => res.data);
