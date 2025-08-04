import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3006/api',
  withCredentials: true, // penting untuk cookie refresh token
});

export default api;
