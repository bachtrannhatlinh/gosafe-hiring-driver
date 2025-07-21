import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // 👈 sửa lại nếu deploy
});

export default api;
