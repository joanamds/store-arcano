import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/home/:id" element={<Home />} />
    </Routes>
  );
}

export default App;
