import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import Home from '../Components/Home';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import EditProfile from '../Components/EditProfile';
import UserORecords from '../Components/UserORecords';
import Booking from '../Components/Booking';
import AddAddress from '../Components/AddAddress';
import Cart from '../Components/Cart';
import ProtectedRoute from './UserProtectedRoutes';

function FinalController() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/orders" element={<UserORecords />} />
        <Route path="/add_address" element={<AddAddress />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  
}

export default FinalController;
