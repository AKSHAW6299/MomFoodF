import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import VerifyOTP from './pages/VerifyOtp.jsx';
import SignupPage from './pages/SignUp.jsx';
import Cart from './pages/Cart.jsx';


function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/Verify-otp" element={<VerifyOTP />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;