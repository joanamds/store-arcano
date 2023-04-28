import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import CartHistory from './pages/CartHistory';
import Profile from './pages/Profile';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/home/:id" element={<Home />} />
      <Route exact path="/cart-history/:id" element={<CartHistory />} />
      <Route exact path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;
