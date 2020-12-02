import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:50212/api',
});

export default api;
