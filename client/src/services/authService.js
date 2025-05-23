import axios from 'axios';
const API = "https://woocommerce-sync-app.onrender.com/api";

export const loginUser = (data) =>
  axios.post(`${API}/auth/login`, data).then(res => res.data);

export const registerUser = (userData) =>
  axios.post(`${API}/auth/register`, userData).then(res => res.data);
