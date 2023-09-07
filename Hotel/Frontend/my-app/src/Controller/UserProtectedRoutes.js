import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Home from '../Components/Home';

function ProtectedRoute(path) {
  var isuserLoggedIn = window.sessionStorage.getItem('qwert');
  console.log(path);
  if (isuserLoggedIn != null && isuserLoggedIn === '9876543210') {
    return <Home/>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
