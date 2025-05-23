import axios from 'axios';
const API = "https://woocommerce-sync-app.onrender.com";


export const loginUser = (data) => axios.post(`${API}/auth/login`, data).then(res => res.data);
export const registerUser = async (userData) =>
  await axios.post(`${API}/auth/register`, userData);
