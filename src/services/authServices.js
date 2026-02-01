import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

// Request Interceptor: Attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Response Interceptor: Global Error/Expiry Handling
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

// Auth Exports
export const login = (data) => API.post('/auth/login', data);
export const signup = (data) => API.post('/auth/signup', data);
export const forgotPassword = (data) => API.post('/auth/forgot-password', data);
export const verifyOtp = (data) => API.post('/auth/verify-otp', data);
export const resetPassword = (data) => API.post('/auth/reset-password', data);

// Product Exports
export const fetchProducts = () => API.get('/products');
export const addProduct = (data) => API.post('/products', data);
export const deleteProduct = (id) => API.delete(`/products/${id}`); // Added for full SaaS functionality