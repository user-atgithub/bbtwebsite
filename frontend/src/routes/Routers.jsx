import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Technicians from '../pages/Technicians/Technicians';
import TechnicianDetails from '../pages/Technicians/TechnicianDetails';
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from '../Dashboard/technician-account/Dashboard';
import Reviews from '../pages/Reviews'; 
import CheckoutSuccess from '../pages/CheckoutSuccess';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/technicians" element={<Technicians />} />
      <Route path="/technicians/:id" element={<TechnicianDetails />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Signup />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['customer']}><MyAccount /></ProtectedRoute>} />
      <Route path="/technicians/profile/me" element={<ProtectedRoute allowedRoles={['technician']}><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}

export default Routers;
