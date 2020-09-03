import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('@proffy:token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
