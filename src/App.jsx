import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ConfirmPassword from './components/ConfirmPassword';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        closeOnClick
        theme='light'
        pauseOnHover={false}
      />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/confirm' element={<ConfirmPassword />} />
          <Route path='/home' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
