import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Login from './components/Login';
import AllUsers from './components/AllUsers';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path='allusers' element={<AllUsers />} />
        </Route>
      </Route>
    </Routes>
  </Router>
  );
};

export default App;
