import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const loginUser = (data) => axios.post(`${API}/auth/login`, data).then(res => res.data);
export const registerUser = async (userData) => {
  return await axios.post('http://localhost:5000/api/auth/register', userData);
};
