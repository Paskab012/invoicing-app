import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmPassword from './components/ConfirmPassword';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import WelcomePage from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/confirm' element={<ConfirmPassword />} />
        <Route path='/home' element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
