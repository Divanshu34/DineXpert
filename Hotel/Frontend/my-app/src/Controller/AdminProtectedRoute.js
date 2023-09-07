import React from 'react';
import { Route, Navigate } from 'react-router-dom';



function AdminProtectedRoute({ element: Element, ...rest }) {
 
  var isAdminLoggedIn =window.sessionStorage.getItem('trewq');
  if (isAdminLoggedIn != null && isAdminLoggedIn === '7946138520') {
    return <Route {...rest} element={<Element />} />;
  } 
  else {
    return <Navigate to="/login" />;
  }
}

export default AdminProtectedRoute;
