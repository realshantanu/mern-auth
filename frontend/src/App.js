import './App.css';
import React from 'react';
import Login from './pages/login';
import Register from './pages/register'; 
import Home from './pages/home';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>

  );
}

export default App;
