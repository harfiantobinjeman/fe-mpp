import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.11.245:3006/api',
  withCredentials: true, // penting untuk cookie refresh token
});

export default api;
