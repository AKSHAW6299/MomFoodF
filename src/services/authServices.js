import axios from 'axios';

// --- PRODUCTION CONFIGURATION ---
// Updated to your Render URL
const API = axios.create({ 
  baseURL: 'https://momfoodb.onrender.com/api' 
});

// Request Interceptor: Attach token for authenticated routes (like adding products)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Response Interceptor: Global Error/Expiry Handling
API.interceptors.response.use(
  (res) => res,
  (err) => {
    // If the token is expired or invalid, boot the user to login
    if (err.response?.status === 401) {
      localStorage.clear();
      // Only redirect if we aren't already on the login page to avoid loops
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  }
);

// --- AUTH EXPORTS ---
export const login = (data) => API.post('/auth/login', data);
export const signup = (data) => API.post('/auth/signup', data);
export const forgotPassword = (data) => API.post('/auth/forgot-password', data);
export const verifyOtp = (data) => API.post('/auth/verify-otp', data);
export const resetPassword = (data) => API.post('/auth/reset-password', data);

// --- PRODUCT EXPORTS ---
export const fetchProducts = () => API.get('/products');
export const addProduct = (data) => API.post('/products', data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export default API;